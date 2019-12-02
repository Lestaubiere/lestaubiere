import React from 'react';

import { includeDefaultNamespaces } from '../plugins/i18n';

function Contact() {
  return <div className="Contact">Contact</div>;
}

Contact.getInitialProps = () => {
  return {
    namespacesRequired: includeDefaultNamespaces([]),
  };
};

export default Contact;
