import React from 'react';

import Menu from './Menu';
import Contact from './Contact';
import Zoover from './Zoover';
import Facebook from './Facebook';
import SubFooter from './SubFooter';

import './Footer.css';

function Footer() {
  return (
    <div className="Footer">
      <div className="Footer__container">
        <div className="Footer__content">
          <div className="Footer__column">
            <Menu />
          </div>
          <div className="Footer__column">
            <Contact />
          </div>
          <div className="Footer__column">
            <Zoover />
          </div>
          <div className="Footer__column">
            <Facebook />
          </div>
        </div>
      </div>
      <SubFooter />
    </div>
  );
}

export default Footer;
