import React, { ChangeEvent, PureComponent } from 'react';
import { Select } from '@grafana/ui';
import { SelectableValue, QueryEditorProps } from '@grafana/data';

import { DataSource } from './DataSource';
import { SpliceDataSourceOptions, SpliceQuery } from './types';

const FORMAT_OPTIONS: Array<SelectableValue<string>> = [
  { label: 'Time series', value: 'time_series' },
  { label: 'Table', value: 'table' },
];

type Props = QueryEditorProps<DataSource, SpliceQuery, SpliceDataSourceOptions>;

interface State {
  formatOption: SelectableValue<string>;
}

export class QueryEditor extends PureComponent<Props, State> {
  // Query target to be modified and used for queries
  query: SpliceQuery;

  constructor(props: Props) {
    super(props);

    // Use default query to prevent undefined input values
    const defaultQuery: Partial<SpliceQuery> = {};
    const query = Object.assign({}, defaultQuery, props.query);
    this.query = query;

    // Query target properties that are fully controlled inputs
    this.state = {
      // Select options
      formatOption: FORMAT_OPTIONS.find(option => option.value === query.format) || FORMAT_OPTIONS[0],
    };
  }

  onFieldChange = (query: ChangeEvent<HTMLTextAreaElement>) => {
    this.query.queryText = query.target.value;
  };

  onFormatChange = (option: SelectableValue<string>) => {
    this.query.format = option.value;
    this.setState({ formatOption: option }, this.onRunQuery);
  };

  onQueryTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { onChange, query } = this.props;
    onChange({ ...query, queryText: event.target.value });
  };

  onConstantChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { onChange, query, onRunQuery } = this.props;
    onChange({ ...query, constant: parseFloat(event.target.value) });
    // executes the query
    onRunQuery();
  };

  onRunQuery = () => {
    const { query } = this;
    this.props.onChange(query);
    this.props.onRunQuery();
  };

  render() {
    const { formatOption } = this.state;

    return (
      <div className="gf-form-group">
        <div className="gf-form-inline">
          <div className="gf-form gf-form--grow">
            <textarea
              rows={7}
              className="gf-form-input"
              placeholder="Enter a splice machine query"
              data-min-length={0}
              data-items={100}
              onChange={this.onFieldChange}
            ></textarea>
          </div>
        </div>

        <div className="gf-form-inline">
          <div className="gf-form">
            <div className="gf-form-label width-7">Format</div>
            <Select
              width={16}
              isSearchable={false}
              options={FORMAT_OPTIONS}
              onChange={this.onFormatChange}
              value={formatOption}
            />
          </div>
        </div>
      </div>
    );
  }
}
