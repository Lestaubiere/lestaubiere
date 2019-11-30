import React from 'react';

import Layout from '../components/Layout';

function Leisure() {
  return (
    <Layout title="Leisure">
      <div className="Leisure">Leisure</div>
    </Layout>
  );
}

Leisure.getInitialProps = () => {
  return {
    namespacesRequired: ['navigation'],
  };
};

export default Leisure;
