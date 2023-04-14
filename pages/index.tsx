import { Divider } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Head from 'next/head';
import React from 'react';
import ReactGA from 'react-ga';
import App from './components/app';
export default class HomePage extends React.Component {

    componentDidMount() {
        ReactGA.initialize('UA-163866086-1');
        ReactGA.pageview(window.location.pathname + window.location.search);
    }

    render() {
        return (
            <div>
                <Head>
                    <title>Scotland COVID Dashboard</title>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                    <meta name="description" content="Scotland COVID Dashboard tracking daily COVID-19 cases." />
                </Head>
                <Container>
                    <Typography variant="h4">Scotland COVID-19 Dashboard</Typography>
                    <Typography variant="overline" style={{ marginBottom: 25, display: 'block' }}>
                        <span>Updated Daily - BST/GMT</span>
                    </Typography>
                </Container>
                <App />
                <Container style={{ marginTop: 50, marginBottom: 50 }}>
                    <Divider variant="middle" />
                    <Typography variant="body1" style={{ textAlign: 'center', marginTop: 25 }}>
                        <span>Made with ❤️ by </span>
                        <ReactGA.OutboundLink style={{color: '#0366d6'}} eventLabel="outbound-twitter.com/jamiechung" target="_blank" to="https://twitter.com/jamiechung">
                            Jamie Chung
                        </ReactGA.OutboundLink>
                        <span> in Edinburgh, Scotland </span>
                        
                        <br />
                        <br />

                        <span> Data provided by </span>
                        <ReactGA.OutboundLink style={{color: '#0366d6'}} eventLabel="outbound-github.com/tomwhite/covid-19-uk-data" target="_blank" to="https://github.com/tomwhite/covid-19-uk-data">
                            Tom White
                        </ReactGA.OutboundLink>
                        <span> &middot; </span>
                        <ReactGA.OutboundLink style={{color: '#0366d6'}} eventLabel="outbound-github.com/watty62/Scot_covid19" target="_blank" to="https://github.com/watty62/Scot_covid19">
                            Ian Watty
                        </ReactGA.OutboundLink>

                        <br />
                        <br />
                        
                        <ReactGA.OutboundLink style={{color: '#0366d6'}} eventLabel="outbound-github.com/jamiechung/scotland-covid-dashboard" target="_blank" to="https://github.com/JamieChung/scotland-covid-dashboard">
                            Contribute on GitHub
                        </ReactGA.OutboundLink>

                        <span> &middot; </span>

                        <ReactGA.OutboundLink style={{color: '#0366d6'}} eventLabel="outbound-feedback" target="_blank" to="mailto:me@jamiechung.me">
                            Send Feedback
                        </ReactGA.OutboundLink>
                        
                    </Typography>
                </Container>
            </div>
        );
    }
}