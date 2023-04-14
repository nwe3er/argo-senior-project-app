import { Card, CardContent, CardHeader, LinearProgress, Typography } from "@material-ui/core";
import axios from 'axios';
import numeral from 'numeral';
import React from "react";
import * as utilities from '../utils/utilities';


export default class SingleKPICard extends React.Component<{ title: string, query: any }> {

    state = {
        value: 0,
        ready: false
    }

    componentDidMount() {
        axios.get(utilities.createbaseURLWithQuery(this.props.query))
            .then(response => {
                this.setState({ value: response.data.rows[0], ready: true });
            })
    }

    render() {
        return (
            <Card>
                <CardHeader subheader={this.props.title} />
                {this.state.ready ?
                    <CardContent>
                        <Typography variant="h5">
                            {numeral(this.state.value).format('0,0')}
                        </Typography>
                    </CardContent> :
                    <LinearProgress />}
            </Card>
        )
    }
}