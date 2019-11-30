import React from 'react';

import Layout from '../components/Layout';

function Surroundings() {
  return (
    <Layout title="Surroundings">
      <div className="Surroundings">Surroundings</div>
    </Layout>
  );
}

Surroundings.getInitialProps = () => {
  return {
    namespacesRequired: ['navigation'],
  };
};

export default Surroundings;
