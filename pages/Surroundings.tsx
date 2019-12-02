import React from 'react';

import { includeDefaultNamespaces } from '../plugins/i18n';

function Surroundings() {
  return <div className="Surroundings">Surroundings</div>;
}

Surroundings.getInitialProps = () => {
  return {
    namespacesRequired: includeDefaultNamespaces([]),
  };
};

export default Surroundings;
