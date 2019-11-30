import React from 'react';

import Layout from '../components/Layout';

function Vacatures() {
  return (
    <Layout title="Vacatures">
      <div className="Vacatures">Vacatures</div>
    </Layout>
  );
}

Vacatures.getInitialProps = () => {
  return {
    namespacesRequired: ['navigation'],
  };
};

export default Vacatures;
