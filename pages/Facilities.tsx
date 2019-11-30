import React from 'react';

import Layout from '../components/Layout';

function Facilities() {
  return (
    <Layout title="Facilities">
      <div className="Facilities">Facilities</div>
    </Layout>
  );
}

Facilities.getInitialProps = () => {
  return {
    namespacesRequired: ['navigation'],
  };
};

export default Facilities;
