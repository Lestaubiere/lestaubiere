import React from 'react';

import { includeDefaultNamespaces } from '../plugins/i18n';

function Rentals() {
  return <div className="Rentals">Rentals</div>;
}

Rentals.getInitialProps = () => {
  return {
    namespacesRequired: includeDefaultNamespaces([]),
  };
};

export default Rentals;
