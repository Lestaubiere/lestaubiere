import React from 'react';

import Layout from '../components/Layout';

function Home() {
  return (
    <Layout title="Home">
      <div className="Home">Home</div>
    </Layout>
  );
}

Home.getInitialProps = () => {
  return {
    namespacesRequired: ['navigation'],
  };
};

export default Home;
