import React, { ReactChild } from 'react';

import { Header, Footer } from '.';

import './Layout.css';

interface Props {
  children: ReactChild;
}

function Layout(props: Props) {
  return (
    <div className="Layout">
      {/* <Head>
        <title>{props.title} | Camping Lestaubière</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <div className="Layout__header">
        <Header />
      </div>
      <div className="Layout__content">
        <div className="Layout__content-container">{props.children}</div>
      </div>
      <div className="Layout__footer">
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
