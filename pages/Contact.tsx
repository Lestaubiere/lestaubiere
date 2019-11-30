import React from 'react';

import Layout from '../components/Layout';

function Contact() {
  return (
    <Layout title="Contact">
      <div className="Contact">Contact</div>
    </Layout>
  );
}

Contact.getInitialProps = () => {
  return {
    namespacesRequired: ['navigation'],
  };
};

export default Contact;
