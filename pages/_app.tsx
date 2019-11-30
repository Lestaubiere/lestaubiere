import React from 'react';
import App from 'next/app';

import { appWithTranslation } from '../plugins/i18n';

class MyApp extends App {
  public render() {
    const { Component, pageProps } = this.props;

    return <Component {...pageProps} />;
  }
}

export default appWithTranslation(MyApp);
