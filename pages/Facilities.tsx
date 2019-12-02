import React from 'react';

import { includeDefaultNamespaces } from '../plugins/i18n';

function Facilities() {
  return <div className="Facilities">Facilities</div>;
}

Facilities.getInitialProps = () => {
  return {
    namespacesRequired: includeDefaultNamespaces([]),
  };
};

export default Facilities;
