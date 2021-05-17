import {
  DataSourceInstanceSettings,
  ScopedVars,
  DataQueryRequest,
  DataQueryResponse,
  LoadingState,
} from '@grafana/data';
import { DataSourceWithBackend, getBackendSrv, getTemplateSrv, toDataQueryResponse, config } from '@grafana/runtime';
import { SpliceDataSourceOptions, SpliceQuery } from './types';
import { Observable, from, merge } from 'rxjs';
import { runStream } from './runStreams';
import { map as _map } from 'lodash';

const ExpressionDatasourceID = '__expr__';

export class DataSource extends DataSourceWithBackend<SpliceQuery, SpliceDataSourceOptions> {
  url: string;
  headers: any;

  type: string;
  username: string;
  name: string;
  database: any;
  basicAuth: any;
  withCredentials: any;
  interval: any;
  responseParser: any;

  constructor(instanceSettings: DataSourceInstanceSettings<SpliceDataSourceOptions>) {
    super(instanceSettings);

    this.type = 'splicemachinedb';
    this.url = instanceSettings.url ?? '';

    this.username = instanceSettings.username ?? '';
    this.name = instanceSettings.name;
    this.database = instanceSettings.database;
    this.basicAuth = instanceSettings.basicAuth;
    this.withCredentials = instanceSettings.withCredentials;
    this.headers = instanceSettings.jsonData;
  }

  interpolateVariable(value: any, variable: any) {
    if (typeof value === 'string') {
      if (variable.multi || variable.includeAll) {
        return "'" + value.replace(/'/g, `''`) + "'";
      } else {
        return value;
      }
    }

    if (typeof value === 'number') {
      return value;
    }

    const quotedValues = _map(value, val => {
      if (typeof value === 'number') {
        return value;
      }

      return "'" + val.replace(/'/g, `''`) + "'";
    });
    return quotedValues.join(',');
  }

  async testDatasource() {
    // Implement a health check for your data source.
    return getBackendSrv()
      .datasourceRequest({
        url: this.url + '/',
        method: 'GET',
        headers: this.headers,
      })
      .then(response => {
        if (response.status === 200) {
          return { status: 'success', message: 'Data source is working', title: 'Success' };
        }
        return { status: 'fail', message: response.message };
      });
  }

  /**
   * Ideally final -- any other implementation may not work as expected
   */
  query(request: DataQueryRequest<SpliceQuery>): Observable<DataQueryResponse> {
    const { intervalMs, maxDataPoints, range, requestId } = request;
    const orgId = config.bootData.user.orgId;
    const streams: Array<Observable<DataQueryResponse>> = [];
    const queries: any[] = [];

    let targets = request.targets;
    if (this.filterQuery) {
      targets = targets.filter(q => this.filterQuery!(q));
    }
    for (const q of targets) {
      if (q.format === 'stream') {
        streams.push(runStream(this.myapplyTemplateVariables(q, request.scopedVars), request, this.headers, this.url));
      } else {
        let datasourceId = this.id;
        if (q.datasource === ExpressionDatasourceID) {
          queries.push({
            ...q,
            datasourceId,
            orgId,
          });
        } else {
          if (q.datasource) {
            const dsName = q.datasource === 'default' ? config.defaultDatasource : q.datasource;
            const ds = config.datasources[dsName];
            if (!ds) {
              throw new Error('Unknown Datasource: ' + q.datasource);
            }
            datasourceId = ds.id;
          }
          queries.push({
            //...q,
            ...this.myapplyTemplateVariables(q, request.scopedVars),
            datasourceId,
            intervalMs,
            maxDataPoints,
            orgId,
          });
        }
      }
    }

    if (queries.length) {
      const body: any = {
        queries,
      };
      if (range) {
        body.range = range;
        body.from = range.from.valueOf().toString();
        body.to = range.to.valueOf().toString();
      }

      //const req: Promise<DataQueryResponse> = getBackendSrv()

      const stream = getBackendSrv()
        .datasourceRequest({
          url: this.url + '/query',
          method: 'POST',
          data: body,
          headers: this.headers,
          requestId,
        })
        .then((rsp: any) => {
          //const dqs = toDataQueryResponse(rsp);
          //if (this.processResponse) {
          //return this.processResponse(dqs);
          //}
          //return dqs;
          const dqs: DataQueryResponse = {
            data: rsp.data,
            state: LoadingState.Done,
          };
          return dqs;
        })
        .catch(err => {
          err.isHandled = true; // Avoid extra popup warning
          const dqs = toDataQueryResponse(err);
          if (this.processResponse) {
            return this.processResponse(dqs);
          }
          return dqs;
        });

      streams.push(from(stream));
    }
    return merge(...streams);
  }

  /**
   * Ideally final -- any other implementation may not work as expected
   */
  variableQuery(query: DataQueryRequest<SpliceQuery>): Observable<DataQueryResponse> {
    const orgId = config.bootData.user.orgId;

    let datasourceId = this.id;

    const sqlstmt: any = { ...query, datasourceId, orgId };
    const body: any = {
      sqlstmt,
    };

    const stream = getBackendSrv()
      .datasourceRequest({
        url: this.url + '/variablequery',
        method: 'POST',
        data: body,
        headers: this.headers,
      })
      .then((rsp: any) => {
        const dqs: DataQueryResponse = {
          data: rsp.data,
          state: LoadingState.Done,
        };
        return dqs;
      })
      .catch(err => {
        err.isHandled = true; // Avoid extra popup warning
        const dqs = toDataQueryResponse(err);
        if (this.processResponse) {
          return this.processResponse(dqs);
        }
        return dqs;
      });

    return from(stream);
  }

  processResponse?(res: DataQueryResponse): Promise<DataQueryResponse>;

  filterQuery?(query: SpliceQuery): boolean;

  myapplyTemplateVariables(query: SpliceQuery, scopedVars: ScopedVars): SpliceQuery {
    return {
      ...query,
      queryText: getTemplateSrv().replace(query.queryText ?? '', scopedVars), // The raw query text
    };
  }

  async metricFindQuery(query: string, options?: any) {
    let interpolatedQuery: string;

    if (!query) {
      return [];
    } else {
      interpolatedQuery = getTemplateSrv().replace(query, {}, this.interpolateVariable);
    }
    const response = await this.variableQuery({
      rawQueryText: interpolatedQuery,
      queryText: interpolatedQuery,
      timeColumns: [],
    } as any).toPromise();

    if (response.error) {
      throw new Error(response.error.message);
    }

    const data: any = response.data;

    const dataCols: any = data.columns;
    if (data.columns.length !== 1) {
      throw new Error(`Received more than one (${dataCols.length}) columns`);
    }

    const dataRows: any = data.rows;
    return dataRows.flatMap(x => x).map(text => ({ text }));
  }
}
