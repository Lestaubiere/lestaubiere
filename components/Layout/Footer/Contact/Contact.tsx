import React from 'react';

import './Contact.css';

function Contact() {
  return (
    <div className="FooterContact">
      <div className="FooterContact__title">Contact</div>
      <div className="FooterContact__address">
        <p className="FooterContact__address-line">Camping Lestaubière</p>
        <p className="FooterContact__address-line">Pont Saint-Mamet</p>
        <p className="FooterContact__address-line">24140, Douville</p>
        <p className="FooterContact__address-line">France</p>
      </div>
      <div className="FooterContact__contact">
        <a className="FooterContact__link" href="tel:+33553829815">
          +33 5 53 82 98 15
        </a>
        <a className="FooterContact__link" href="tel:+33682282397">
          +33 6 82 28 23 97
        </a>
        <a className="FooterContact__link" href="mailto:lestaubiere@gmail.com">
          lestaubiere@gmail.com
        </a>
      </div>
    </div>
  );
}

export default Contact;
