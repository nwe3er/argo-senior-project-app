import { ExpansionPanel, ExpansionPanelDetails, Typography, ExpansionPanelSummary, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import axios from 'axios';
import * as _ from 'lodash';
import numeral from 'numeral';
import React from 'react';
import AreaExpansionPanelDetail from './AreaExpansionPanelDetail';


let query = `
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
    WHERE
      _confirmed.Date = (
        SELECT
          MAX(Date)
        FROM
          indicators
      )
  )
  SELECT
    *
  FROM
    collapsed
  --WHERE
    --Country NOT IN ('UK')
  ORDER BY
    ConfirmedCases DESC
`;

function createBaseWithDB(db: string): string {
  return 'https://covid-19-uk-datasette-65tzkjlxkq-ew.a.run.app/' + db + '.json';
}

const baseURL = createBaseWithDB('covid-19-uk') + '?sql=' + encodeURIComponent(query);

function mapCountryToEmojiFlag(country: String): String {

  let flag = '🇬🇧';
  switch (country) {
    case 'Scotland':
      flag = '🏴󠁧󠁢󠁳󠁣󠁴󠁿';
      break;
    case 'Wales':
      flag = '🏴󠁧󠁢󠁷󠁬󠁳󠁿';
      break;
    case 'England':
      flag = '🏴󠁧󠁢󠁥󠁮󠁧󠁿';
      break;
  }

  return flag ? flag : '🇬🇧';
}

export default class TopCountriesTable extends React.Component {

  state = {
    data: [],
    loading: true
  }

  componentDidMount() {

    axios.get(baseURL)
      .then(response => {

        let _build_data = [];
        // hyrate array of JSON object with rows based on the columns
        _.map(response.data.rows, function (r) {
          _build_data.push(_.mapKeys(r, function (v, k) {
            return response.data.columns[k];
          }))
        });

        this.setState({ data: _build_data });
        this.setState({ loading: false });
      })
  }

  render() {

    if (this.state.loading) {
      return <LinearProgress />
    }

    return (
      <div>
        <TableContainer component={Paper}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Country</TableCell>
                <TableCell>Confirmed Cases</TableCell>
                <TableCell>Tests</TableCell>
                <TableCell>Deaths</TableCell>
                {/* <TableCell>Last Updated</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.data.map(row => <TableRow key={(row.Date + row.Country)}>
                <TableCell>{mapCountryToEmojiFlag(row.Country)} {row.Country}</TableCell>
                <TableCell>{numeral(row.ConfirmedCases).format('0,0')}</TableCell>
                <TableCell>{numeral(row.Tests).format('0,0')}</TableCell>
                <TableCell>{numeral(row.Deaths).format('0,0')}</TableCell>
                {/* <TableCell>{row.Date}</TableCell> */}
              </TableRow>)}
            </TableBody>
          </Table>
        </TableContainer>

      </div>
    )
  }

}
