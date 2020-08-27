import React, { ChangeEvent, PureComponent, KeyboardEvent } from 'react';
import { Select } from '@grafana/ui';
import { SelectableValue, QueryEditorProps } from '@grafana/data';

import { DataSource } from './DataSource';
import { SpliceDataSourceOptions, SpliceQuery } from './types';

const FORMAT_OPTIONS: Array<SelectableValue<string>> = [
  { label: 'Time series', value: 'time_series' },
  { label: 'Table', value: 'table' },
];

const defaultTimeseriesQuery = `SELECT
    <value_column> as value,
    <time_column> as time
  FROM
    <table name>
  WHERE
    $__timeFilter(time_column)
  ORDER BY
    <time_column> ASC`;

const defaultTableQuery = '';

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

    if (typeof this.query.queryText === 'undefined' || this.query.queryText === null || this.query.queryText === '') {
      if (
        typeof this.query.format === 'undefined' ||
        this.query.format === null ||
        this.query.format === 'time_series'
      ) {
        this.query.queryText = defaultTimeseriesQuery;
      } else {
        this.query.queryText = defaultTableQuery;
      }
    }

    // Query target properties that are fully controlled inputs
    this.state = {
      // Select options
      formatOption: FORMAT_OPTIONS.find(option => option.value === query.format) || FORMAT_OPTIONS[0],
    };
  }

  onFormatChange = (option: SelectableValue<string>) => {
    this.query.format = option.value;
    if (this.query.format === 'table' && this.query.queryText === defaultTimeseriesQuery) {
      this.query.queryText = defaultTableQuery;
    } else if (this.query.format === 'time_series' && this.query.queryText === '') {
      this.query.queryText = defaultTimeseriesQuery;
    }
    this.setState({ formatOption: option }, this.onRunQuery);
  };

  onQueryTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { onChange, query } = this.props;
    this.query.queryText = event.target.value;
    onChange({ ...query, queryText: event.target.value });
  };

  onQueryTextKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    const keyboardEvent = event as KeyboardEvent;
    if ((keyboardEvent.keyCode === 13 && keyboardEvent.shiftKey) || keyboardEvent.key === 'Tab') {
      keyboardEvent.preventDefault();
      this.onRunQuery();
      return;
    }
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
              rows={9}
              className="gf-form-input"
              placeholder="Enter a splice machine query (run with Shift+Enter)"
              data-min-length={0}
              data-items={100}
              value={this.query.queryText}
              onKeyDown={this.onQueryTextKeyDown}
              onChange={this.onQueryTextChange}
              spellCheck={false}
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
