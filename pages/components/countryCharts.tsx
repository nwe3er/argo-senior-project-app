import {
  Card,
  CardContent,
  CardHeader,
  LinearProgress,
} from '@material-ui/core';
import axios from 'axios';
import * as _ from 'lodash';
import moment from 'moment';
import React from 'react';
import {
  Brush,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import * as colors from '../utils/chartcolors';

const query = `
with _confirmed AS (
    SELECT
      Date,
      Country,
      Value AS ConfirmedCases
    FROM
      indicators
    WHERE
      Indicator = 'ConfirmedCases'
  ),
  _tests AS (
    SELECT
      Date,
      Country,
      Value AS Tests
    FROM
      indicators
    WHERE
      Indicator = 'Tests'
  ),
  _deaths AS (
    SELECT
      Date,
      Country,
      Value AS Deaths
    FROM
      indicators
    WHERE
      Indicator = 'Deaths'
  ),
  collapsed AS (
    SELECT
      _confirmed.Date,
      _Confirmed.Country,
      COALESCE(ConfirmedCases, 0) AS ConfirmedCases,
      COALESCE(Tests, 0) AS Tests,
      COALESCE(Deaths, 0) AS Deaths
    FROM
      _confirmed
      LEFT JOIN _tests ON (
        _confirmed.Country = _tests.Country
        AND _confirmed.Date = _tests.Date
      )
      LEFT JOIN _deaths ON (
        _confirmed.Country = _deaths.Country
        AND _confirmed.Date = _deaths.Date
      )
  )
  SELECT
    *
  FROM
    collapsed
  WHERE
    Country IN ('Scotland')
  ORDER BY
    Date ASC
`;

function formatDateLabel(label: string): string {
  // return new Date(label).getMonth () + '-' + new Date(label).getDay();
  return moment(label).format('MMM-DD');
}

function createBaseWithDB(db: string): string {
  return (
    'https://covid-19-uk-datasette-65tzkjlxkq-ew.a.run.app/' + db + '.json'
  );
}

const baseURL =
  createBaseWithDB('covid-19-uk') + '?sql=' + encodeURIComponent(query);

function singleCountryChart(title: string, data: any[]) {
  return (
    <Card>
      <CardHeader subheader={title} />
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart>
            <Line
              dataKey="ConfirmedCases"
              data={data}
              stroke={colors.COLOR_CONFIRMED_CASES_HEX}
            />
            <Line dataKey="Tests" data={data} stroke={colors.COLOR_TESTS_HEX} />
            <Line
              dataKey="Deaths"
              data={data}
              stroke={colors.COLOR_DEATHS_HEX}
            />
            <Legend />
            <Tooltip />
            <CartesianGrid strokeDasharray="5 5" />
            <YAxis />
            <Brush dataKey="Date" height={30} stroke="#8884d8" />
            <XAxis
              dataKey="Date"
              allowDuplicatedCategory={false}
              tickFormatter={formatDateLabel}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

export default class CountryCharts extends React.Component {
  state = {
    data: [],
    loading: true,
  };

  componentDidMount() {
    axios.get(baseURL).then((response) => {
      let _build_data: { [key: string]: any }[] = [];
      // hyrate array of JSON object with rows based on the columns
      _.map(response.data.rows, function (r) {
        _build_data.push(
          _.mapKeys(r, function (v, k) {
            return response.data.columns[k];
          })
        );
      });

      this.setState({
        data: _.groupBy(_build_data, 'Country'),
        loading: false,
      });
    });
  }

  render() {
    if (this.state.loading) {
      return <LinearProgress />;
    }

    return (
      <div>
        {singleCountryChart(
          'USA Confirmed Cases, Tests and Deaths',
          this.state.data['Scotland']
        )}
      </div>
    );
  }
}
