import React from 'react';
import { DataSourceHttpSettings } from '@grafana/ui';
import { DataSourcePluginOptionsEditorProps } from '@grafana/data';
import { SpliceDataSourceOptions } from './types';

export const ConfigEditor = (props: DataSourcePluginOptionsEditorProps<SpliceDataSourceOptions>) => {
  const { options, onOptionsChange } = props;

  return (
    <>
      <DataSourceHttpSettings
        defaultUrl="http://localhost:1111"
        dataSourceConfig={options}
        onChange={onOptionsChange}
      />
    </>
  );
};
