import { Grid } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import AreasCharts from '../components/areasCharts';
import CountryCharts from '../components/countryCharts';
import SingleKPICard from '../components/singleKPICard';
import TopAreasTable from '../components/topAreasTable';
import TopCountriesTable from '../components/topCountriesTable';
import * as queries from '../utils/queries';
import DailyChangeCasesCard from './DailyChangeCasesCard';
import ICUTrendCard from './ICUTrendCard';
import StaffAbsencesCard from './StaffAbsencesCard';

export default class App extends React.Component {

    render() {
        return (
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography variant="h5">Scotland Overview</Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <SingleKPICard title="Total number of confirmed cases in Scotland" query={queries.QUERY_TOTAL_CONFIRMED_CASES_SCOTLAND} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <SingleKPICard title="Latest daily number of confirmed cases in Scotland" query={queries.QUERY_DAILY_CHANGE_CONFIRMED_CASES_SCOTLAND} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <SingleKPICard title="Total number of tests in Scotland" query={queries.QUERY_TOTAL_TESTS_SCOTLAND} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <SingleKPICard title="Latest daily number of tests in Scotland" query={queries.QUERY_DAILY_CHANGE_TESTS_SCOTLAND} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <SingleKPICard title="Total number of deaths in Scotland" query={queries.QUERY_TOTAL_DEATHS_SCOTLAND} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <SingleKPICard title="Latest daily number of deaths in Scotland" query={queries.QUERY_DAILY_CHANGE_DEATHS_SCOTLAND} />
                    </Grid>
                    <Grid item xs={12}>
                        <CountryCharts />
                    </Grid>
                    <Grid item xs={12}>
                        <DailyChangeCasesCard title="Daily Change of Confirmed Cases in Scotland (past 60 days)" />
                    </Grid>
                    <Grid item xs={12}>
                        <ICUTrendCard title="Scotland Intensive Care (ICU) Utilisation" query="2141" />
                    </Grid>
                    <Grid item xs={12}>
                        <StaffAbsencesCard title="Scotland Hospital Staff Absences" query="2141" />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h5">Scotland Regions</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TopAreasTable />
                    </Grid>
                    <Grid item xs={12}>
                        <AreasCharts />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h5">United Kingdom Overview</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TopCountriesTable />
                    </Grid>
                </Grid>
            </Container>
        );
    }
}