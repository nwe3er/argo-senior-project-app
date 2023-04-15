import { Card, CardContent, CardHeader, LinearProgress } from "@material-ui/core";
import axios from 'axios';
import csvtojson from 'csvtojson';
import React from "react";
import { Bar, Brush, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import * as CHART_COLORS from '../utils/chartcolors';

export default class StaffAbsencesCard extends React.Component<{ title: string, query: any }> {

    state = {
        value: [],
        ready: false
    }

    componentDidMount() {
        // axios.get(utilities.createbaseURLWithQuery(this.props.query))
        axios.get('https://raw.githubusercontent.com/watty62/Scot_covid19/master/data/processed/staff_absences.csv')
            .then(response => {
                csvtojson({ headers: ['date', 'nurses_midwives', 'medical_dental', 'other', 'all'] })
                    .fromString(response.data)
                    .then((json) => {
                        this.setState({
                            value: json, ready: true
                        });
                    })
            })
    }

    render() {
        return (
            <Card>
                <CardHeader subheader={this.props.title} />
                {this.state.ready ?
                    <CardContent>
                        <ResponsiveContainer width='100%' height={350}>
                            <ComposedChart data={this.state.value}>
                                <Bar barSize={20} stackId="a" fill={CHART_COLORS.COLOR_PBI_DEFAULT[0]} dataKey="nurses_midwives" name="Nurses and Midwives" />
                                <Bar barSize={20} stackId="a" fill={CHART_COLORS.COLOR_PBI_DEFAULT[1]} dataKey="medical_dental" name="Medical and Dental" />
                                <Bar barSize={20} stackId="a" fill={CHART_COLORS.COLOR_PBI_DEFAULT[2]} dataKey="other" name="Other" />
                                <Line type="monotone" dataKey="all" name="All" />
                                <Legend />
                                <Tooltip />
                                <CartesianGrid strokeDasharray="5 5" />
                                <Brush dataKey="date" height={30} stroke="#8884d8" />
                                <YAxis />
                                <XAxis
                                    dataKey="date"
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