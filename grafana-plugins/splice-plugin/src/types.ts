import { DataQuery, DataSourceJsonData, DataSourceSettings } from '@grafana/data';

export interface SpliceQuery extends DataQuery {
  queryText?: string;
  alias?: string;
  format?: string;
  rawSql?: string;
}

export const defaultQuery: Partial<SpliceQuery> = {
  format: 'table',
};

/**
 * These are options configured for each DataSource instance
 */
export interface SpliceDataSourceOptions extends DataSourceJsonData {}

/**
 * Value that is used in the backend, but never sent over HTTP to the frontend
 */
export interface SpliceSecureJsonData {
  apiKey?: string;
}

export interface HttpSettingsBaseProps {
  dataSourceConfig: DataSourceSettings<any, any>;
  onChange: (config: DataSourceSettings) => void;
}

export interface HttpSettingsProps extends HttpSettingsBaseProps {
  defaultUrl: string;
  showAccessOptions?: boolean;
}
