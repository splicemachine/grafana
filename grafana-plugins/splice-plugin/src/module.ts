import { DataSourcePlugin } from '@grafana/data';
import { DataSource } from './DataSource';
import { ConfigEditor } from './ConfigEditor';
import { QueryEditor } from './QueryEditor';
import { SpliceQuery, SpliceDataSourceOptions } from './types';

export const plugin = new DataSourcePlugin<DataSource, SpliceQuery, SpliceDataSourceOptions>(DataSource)
  .setConfigEditor(ConfigEditor)
  .setQueryEditor(QueryEditor);
