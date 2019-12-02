import React from 'react';

import { includeDefaultNamespaces } from '../plugins/i18n';

function Booking() {
  return <div className="Booking">Booking</div>;
}

Booking.getInitialProps = () => {
  return {
    namespacesRequired: includeDefaultNamespaces([]),
  };
};

export default Booking;
