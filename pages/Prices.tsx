import React from 'react';

import { includeDefaultNamespaces } from '../plugins/i18n';

function Prices() {
  return <div className="Prices">Prices</div>;
}

Prices.getInitialProps = () => {
  return {
    namespacesRequired: includeDefaultNamespaces([]),
  };
};

export default Prices;
