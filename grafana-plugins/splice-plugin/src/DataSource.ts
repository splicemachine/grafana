import { DataSourceInstanceSettings, DataQueryRequest, DataQueryResponse, LoadingState } from '@grafana/data';
import { DataSourceWithBackend, getBackendSrv, toDataQueryResponse, config } from '@grafana/runtime';
import { SpliceDataSourceOptions, SpliceQuery } from './types';
import { Observable, from, merge } from 'rxjs';
import { runStream } from './runStreams';

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
        streams.push(runStream(q, request, this.headers, this.url));
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
            //getTemplateSrv().replace(qText, request.scopedVars, 'regex'),
            ...q,
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

  processResponse?(res: DataQueryResponse): Promise<DataQueryResponse>;

  filterQuery?(query: SpliceQuery): boolean;
}
