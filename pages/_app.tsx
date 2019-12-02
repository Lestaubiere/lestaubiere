import React from 'react';
import App from 'next/app';

import { appWithTranslation } from '../plugins/i18n';

import Layout from '../components/Layout';

import 'normalize.css/normalize.css';

import '../styles/variables.css';
import '../styles/fonts.css';
import '../styles/index.css';

class MyApp extends App {
  public render() {
    const { Component, pageProps } = this.props;

    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
}

export default appWithTranslation(MyApp);
