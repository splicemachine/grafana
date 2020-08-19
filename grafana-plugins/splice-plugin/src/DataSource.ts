import { DataSourceInstanceSettings, DataQueryRequest, DataQueryResponse, LoadingState } from '@grafana/data';
import { DataSourceWithBackend, getBackendSrv, toDataQueryResponse, config } from '@grafana/runtime';
import { SpliceDataSourceOptions, SpliceQuery } from './types';
import { Observable, from, of } from 'rxjs';

const ExpressionDatasourceID = '__expr__';

export class DataSource extends DataSourceWithBackend<SpliceQuery, SpliceDataSourceOptions> {
  url: string;
  headers: any;
  withCredentials: any;
  user: string;
  password: string;
  constructor(instanceSettings: DataSourceInstanceSettings<SpliceDataSourceOptions>) {
    super(instanceSettings);
    this.url = instanceSettings.url || '';
    this.withCredentials = instanceSettings.withCredentials;
    this.user = (instanceSettings.jsonData || {}).user || '';
    this.password = instanceSettings.password || '';
    this.headers = { 'Content-Type': 'application/json' };
    if (typeof instanceSettings.basicAuth === 'string' && instanceSettings.basicAuth.length > 0) {
      this.headers['Authorization'] = instanceSettings.basicAuth;
    }
    this.headers['user'] = this.user;
    this.headers['password'] = this.password;
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
    let targets = request.targets;
    if (this.filterQuery) {
      targets = targets.filter(q => this.filterQuery!(q));
    }
    const queries = targets.map(q => {
      let datasourceId = this.id;
      if (q.datasource === ExpressionDatasourceID) {
        return {
          ...q,
          datasourceId,
          orgId,
        };
      }
      if (q.datasource) {
        const dsName = q.datasource === 'default' ? config.defaultDatasource : q.datasource;
        const ds = config.datasources[dsName];
        if (!ds) {
          throw new Error('Unknown Datasource: ' + q.datasource);
        }
        datasourceId = ds.id;
      }
      return {
        //getTemplateSrv().replace(qText, request.scopedVars, 'regex'),
        ...q,
        datasourceId,
        intervalMs,
        maxDataPoints,
        orgId,
      };
    });

    // Return early if no queries exist
    if (!queries.length) {
      return of({ data: [] });
    }

    const body: any = {
      queries,
    };
    if (range) {
      body.range = range;
      body.from = range.from.valueOf().toString();
      body.to = range.to.valueOf().toString();
    }

    const req: Promise<DataQueryResponse> = getBackendSrv()
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
        const dqs: DataQueryResponse = { data: rsp.data, state: LoadingState.Done };
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

    return from(req);
  }

  processResponse?(res: DataQueryResponse): Promise<DataQueryResponse>;

  filterQuery?(query: SpliceQuery): boolean;
}
