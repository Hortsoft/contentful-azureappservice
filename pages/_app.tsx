
import App from 'next/app';
import React from 'react';
import Router from 'next/router';

import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import '../styles/globals.css'

import {trackPageView} from '../core/gtag';

Router.events.on('routeChangeComplete', url => trackPageView(url));

class MyApp extends App {
    render() {
        const {Component, pageProps} = this.props;

        return (
            <React.Fragment>
                <Component {...pageProps} />
            </React.Fragment>
        );
    }
}

export default MyApp;
