import React from 'react';

import { includeDefaultNamespaces } from '../plugins/i18n';

function Home() {
  return <div className="Home">Home</div>;
}

Home.getInitialProps = () => {
  return {
    namespacesRequired: includeDefaultNamespaces([]),
  };
};

export default Home;
