import React, { useCallback } from 'react';
import { css, cx } from 'emotion';
import { useTheme } from '@grafana/ui';
import { DataSourceSettings } from '@grafana/data';
import { HttpSettingsProps, SpliceDataSourceOptions } from './types';
import { LegacyForms } from '@grafana/ui';
const { Input, FormField, SecretFormField } = LegacyForms;
import { DataSourcePluginOptionsEditorProps } from '@grafana/data';

const SpliceSourceHttpSettings: React.FC<HttpSettingsProps> = props => {
  const { defaultUrl, dataSourceConfig, onChange } = props;
  const password = dataSourceConfig.secureJsonData ? dataSourceConfig.secureJsonData.basicAuthPassword : '';

  let urlTooltip;
  const theme = useTheme();

  const onSettingsChange = useCallback(
    (change: Partial<DataSourceSettings<any, any>>) => {
      onChange({
        ...dataSourceConfig,
        ...change,
      });
    },
    [dataSourceConfig]
  );

  urlTooltip = (
    <>
      Your access method is <em>Server</em>, this means the URL needs to be accessible from the grafana backend/server.
    </>
  );

  const isValidUrl = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/.test(
    dataSourceConfig.url
  );

  const notValidStyle = css`
    box-shadow: inset 0 0px 5px ${theme.palette.red};
  `;

  const inputStyle = cx({ [`width-20`]: true, [notValidStyle]: !isValidUrl });

  const urlInput = (
    <Input
      className={inputStyle}
      placeholder={defaultUrl}
      value={dataSourceConfig.url}
      onChange={event => onSettingsChange({ url: event.currentTarget.value })}
    />
  );

  const onPasswordReset = () => {
    onChange({
      ...dataSourceConfig,
      basicAuthPassword: '',
      secureJsonData: {
        ...dataSourceConfig.secureJsonData,
        basicAuthPassword: '',
      },
      secureJsonFields: {
        ...dataSourceConfig.secureJsonFields,
        basicAuthPassword: false,
      },
    });
  };

  const onPasswordChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    onChange({
      ...dataSourceConfig,
      basicAuth: true,
      withCredentials: true,
      basicAuthPassword: event.currentTarget.value,
      secureJsonData: {
        ...dataSourceConfig.secureJsonData,
        basicAuthPassword: event.currentTarget.value,
      },
      jsonData: {
        ...dataSourceConfig.jsonData,
        password: event.currentTarget.value,
      },
    });
  };

  const onUserChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    onChange({
      ...dataSourceConfig,
      basicAuth: true,
      withCredentials: true,
      basicAuthUser: event.currentTarget.value,
      jsonData: {
        ...dataSourceConfig.jsonData,
        user: event.currentTarget.value,
      },
    });
  };

  return (
    <div className="gf-form-group">
      <>
        <h3 className="page-heading">HTTP</h3>
        <div className="gf-form-group">
          <div className="gf-form">
            <FormField label="URL" labelWidth={11} tooltip={urlTooltip} inputEl={urlInput} />
          </div>
          <div className="gf-form">
            <FormField
              label="User"
              labelWidth={10}
              inputWidth={18}
              placeholder="user"
              value={dataSourceConfig.basicAuthUser}
              onChange={onUserChange}
            />
          </div>
          <div className="gf-form">
            <SecretFormField
              isConfigured={false}
              value={password || ''}
              inputWidth={18}
              labelWidth={10}
              onReset={onPasswordReset}
              onChange={onPasswordChange}
            />
          </div>
        </div>
      </>
    </div>
  );
};

export type Props = DataSourcePluginOptionsEditorProps<SpliceDataSourceOptions>;
export const ConfigEditor = (props: Props) => {
  const { options, onOptionsChange } = props;

  return (
    <>
      <SpliceSourceHttpSettings
        defaultUrl={'http://splicedb-splice-http.<NAMESPACE>.svc.cluster.local:1111/'}
        dataSourceConfig={options}
        showAccessOptions={true}
        onChange={onOptionsChange}
      />
    </>
  );
};
