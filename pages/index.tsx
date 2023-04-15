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
          <title>USA COVID Dashboard</title>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <meta
            name="description"
            content="USA COVID Dashboard tracking daily COVID-19 cases."
          />
        </Head>
        <Container>
          <Typography variant="h4">USA COVID-19 Dashboard</Typography>
          <Typography
            variant="overline"
            style={{ marginBottom: 25, display: 'block' }}
          >
            <span>Updated Daily</span>
          </Typography>
        </Container>
        <App />
        <Container style={{ marginTop: 50, marginBottom: 50 }}>
          <Divider variant="middle" />
          <Typography
            variant="body1"
            style={{ textAlign: 'center', marginTop: 25 }}
          >
            <span>Made by Nebil and Alex </span>
          </Typography>
        </Container>
      </div>
    );
  }
}
