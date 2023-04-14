import React from "react";
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, LinearProgress, Card, CardHeader, CardContent } from "@material-ui/core";
import axios from 'axios';
import * as _ from 'lodash';
import numeral from 'numeral';
import { ResponsiveContainer, Brush, LineChart, Line, Legend, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import moment from 'moment';
import seedColor from 'seed-color';

const query = `
SELECT
  Area,
  AreaCode,
  CAST(COALESCE(TotalCases, 0) AS Integer) AS TotalCases,
  Date
FROM
  cases
WHERE
  Country = 'Scotland'
ORDER BY
  Date ASC`;

function createBaseWithDB(db: string): string {
    return 'https://covid-19-uk-datasette-65tzkjlxkq-ew.a.run.app/' + db + '.json';
}

const baseURL = createBaseWithDB('covid-19-uk') + '?sql=' + encodeURIComponent(query);


function formatDateLabel(label: string): string {
    // return new Date(label).getMonth () + '-' + new Date(label).getDay();
    return moment(label).format('MMM-DD');
}



export default class AreasCharts extends React.Component {

    state = {
        data: [],
        ready: false
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

                this.setState({
                    data: _.groupBy(_build_data, 'Area'),
                    ready: true
                });
            })
    }

    render() {

        return (
            <Card>
                <CardHeader subheader="Scotland Cases by Regions" />
                {this.state.ready ?
                    <CardContent>
                        <ResponsiveContainer width='100%' height={500}>
                            <LineChart>
                                {_.map(this.state.data, function (data, k) {
                                    return <Line key={k} dataKey="TotalCases" name={k} data={data} stroke={seedColor(k).toHex()} />
                                })}
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
                    </CardContent> :
                    <LinearProgress />}
            </Card>
        )
    }
}