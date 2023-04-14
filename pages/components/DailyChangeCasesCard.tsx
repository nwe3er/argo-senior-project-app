import { Card, CardContent, CardHeader, LinearProgress } from "@material-ui/core";
import axios from 'axios';
import * as _ from 'lodash';
import React from "react";
import { Brush, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import * as queries from '../utils/queries';
import * as utilities from '../utils/utilities';

export default class DailyChangeCasesCard extends React.Component<{ title: string, query?: any }> {

    state = {
        data: [],
        ready: false
    }

    componentDidMount() {
        axios.get(utilities.createbaseURLWithQuery(queries.QUERY_DAILY_CHANGE_CASES_SCOTLAND))
            .then(response => {
                let _build_data = [];
                // hyrate array of JSON object with rows based on the columns
                _.map(response.data.rows, function (r) {
                    _build_data.push(_.mapKeys(r, function (v, k) {
                        return response.data.columns[k];
                    }))
                });

                this.setState({data: _build_data, ready: true});
            })
    }

    render() {
        return (
            <Card>
                <CardHeader subheader={this.props.title} />
                {this.state.ready ?
                    <CardContent>
                        <ResponsiveContainer width='100%' height={350}>
                            <ComposedChart data={this.state.data}>
                                {/* <Bar barSize={20} stackId="a" fill={CHART_COLORS.COLOR_PBI_DEFAULT[0]} dataKey="nurses_midwives" name="Nurses and Midwives" /> */}
                                {/* <Bar barSize={20} stackId="a" fill={CHART_COLORS.COLOR_PBI_DEFAULT[1]} dataKey="medical_dental" name="Medical and Dental" /> */}
                                {/* <Bar barSize={20} stackId="a" fill={CHART_COLORS.COLOR_PBI_DEFAULT[2]} dataKey="other" name="Other" /> */}
                                <Line type="monotone" dataKey="DalyChangeConfirmedCases" name="Daily Change of Confirmed Cases" />
                                <Legend />
                                <Tooltip />
                                <CartesianGrid strokeDasharray="5 5" />
                                <Brush dataKey="Date" height={30} stroke="#8884d8" />
                                <YAxis />
                                <XAxis
                                    dataKey="Date"
                                // allowDuplicatedCategory={false}
                                // tickFormatter={utilities.formatDateLabel}
                                />
                            </ComposedChart>
                        </ResponsiveContainer>
                    </CardContent> :
                    <LinearProgress />}
            </Card>
        )
    }
}