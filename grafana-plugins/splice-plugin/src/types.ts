import { DataQuery, DataSourceJsonData } from '@grafana/data';

export interface SpliceQuery extends DataQuery {
  queryText?: string;
  alias?: string;
  format?: string;
  rawSql?: string;
  constant: number;
}

export const defaultQuery: Partial<SpliceQuery> = {
  format: 'table',
  constant: 6.5,
};

/**
 * These are options configured for each DataSource instance
 */
export interface SpliceDataSourceOptions extends DataSourceJsonData {
  user?: string;
}

/**
 * Value that is used in the backend, but never sent over HTTP to the frontend
 */
export interface SpliceSecureJsonData {
  apiKey?: string;
}
