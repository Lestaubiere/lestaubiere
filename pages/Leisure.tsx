import React from 'react';

import { includeDefaultNamespaces } from '../plugins/i18n';

function Leisure() {
  return <div className="Leisure">Leisure</div>;
}

Leisure.getInitialProps = () => {
  return {
    namespacesRequired: includeDefaultNamespaces([]),
  };
};

export default Leisure;
