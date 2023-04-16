import { Container, Grid, LinearProgress } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import csvtojson from 'csvtojson';
import * as _ from 'lodash';
import React from 'react';
import {
  Brush,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import * as CHART_COLORS from '../utils/chartcolors';
import * as queries from '../utils/queries';
import * as utilities from '../utils/utilities';

export default class AreaExpansionPanelDetail extends React.Component<{
  area?: string;
  areaCode?: string;
}> {
  state = {
    ready: false,
    data_total_cases: [],
    data_regional_hospitalizatons: [],
  };

  constructor(props: any) {
    super(props);
    this.state = {
      ready: false,
      data_total_cases: [],
      data_regional_hospitalizatons: [],
    };
  }

  componentDidMount() {
    axios
      .all([
        axios.get(
          utilities.createbaseURLWithQuery(
            queries.QUERY_TOTAL_CASES_BY_AREA.replace(
              '##AREA##',
              this.props.area ?? ''
            ).replace('##AREACODE##', this.props.areaCode ?? '')
          )
        ),
        axios.get(
          'https://raw.githubusercontent.com/watty62/Scot_covid19/master/data/processed/regional_hospitalisations.csv'
        ),
      ])
      .then(
        axios.spread((total_cases, regional_hospitalizations) => {
          let _build_data: { [key: string]: any }[] = [];
          // hyrate array of JSON object with rows based on the columns
          _.map(total_cases.data.rows, function (r) {
            _build_data.push(
              _.mapKeys(r, function (v, k) {
                return total_cases.data.columns[k];
              })
            );
          });

          this.setState({ data_total_cases: _build_data });

          csvtojson({
            checkType: true,
          })
            .fromString(regional_hospitalizations.data)
            .then((json) => {
              this.setState({ data_regional_hospitalizatons: json });
            });
        })
      )
      .then(() => {
        this.setState({ ready: true });
      });
  }

  render() {
    return this.state.ready ? (
      <Container>
        <Grid>
          <Typography variant="subtitle2" style={{ marginBottom: 10 }}>
            Total Cases
          </Typography>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={this.state.data_total_cases}>
              <Line
                type="monotone"
                fill={CHART_COLORS.COLOR_PBI_DEFAULT[0]}
                dataKey="TotalCases"
                name="Total Cases"
              />
              {/* <Legend /> */}
              <Tooltip />
              <CartesianGrid strokeDasharray="5 5" />
              <Brush dataKey="Date" height={30} stroke="#8884d8" />
              <YAxis />
              <XAxis
                dataKey="Date"
                // allowDuplicatedCategory={false}
                // tickFormatter={utilities.formatDateLabel}
              />
            </LineChart>
          </ResponsiveContainer>

          <Typography
            variant="subtitle2"
            style={{ marginBottom: 10, marginTop: 25 }}
          >
            Total Hospitalisations
          </Typography>

          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={this.state.data_regional_hospitalizatons}>
              <Line
                type="monotone"
                fill={CHART_COLORS.COLOR_PBI_DEFAULT[1]}
                dataKey={this.props.area}
                name="Regional Hospitalizations"
              />
              {/* <Legend /> */}
              <Tooltip />
              <CartesianGrid strokeDasharray="5 5" />
              <Brush dataKey="Date" height={30} stroke="#8884d8" />
              <YAxis />
              <XAxis
                dataKey="Date"
                // allowDuplicatedCategory={false}
                // tickFormatter={utilities.formatDateLabel}
              />
            </LineChart>
          </ResponsiveContainer>
        </Grid>
      </Container>
    ) : (
      <LinearProgress />
    );
  }
}
