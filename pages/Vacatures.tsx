import React from 'react';

import { includeDefaultNamespaces } from '../plugins/i18n';

function Vacatures() {
  return <div className="Vacatures">Vacatures</div>;
}

Vacatures.getInitialProps = () => {
  return {
    namespacesRequired: includeDefaultNamespaces([]),
  };
};

export default Vacatures;
