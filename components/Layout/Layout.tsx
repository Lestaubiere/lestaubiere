import React, { ReactChild } from 'react';
import Head from 'next/head';

import { Header, Footer } from '.';

import './Layout.css';

interface Props {
  title: string;
  children: ReactChild;
}

function Layout(props: Props) {
  return (
    <div className="Layout">
      <Head>
        <title>{props.title} | Camping Lestaubière</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="layout__header">
        <Header />
      </div>
      <div className="layout__content">{props.children}</div>
      <div className="layout__footer">
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
