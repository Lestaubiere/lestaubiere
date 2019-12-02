import React from 'react';

import { includeDefaultNamespaces } from '../plugins/i18n';

function Campsite() {
  return <div className="Campsite">Campsite</div>;
}

Campsite.getInitialProps = () => {
  return {
    namespacesRequired: includeDefaultNamespaces([]),
  };
};

export default Campsite;
