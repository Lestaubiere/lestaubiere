import React from 'react';

import Navigation from './Navigation';

import './Header.css';

function Header() {
  return (
    <div className="Header">
      <div className="Header__top-bar">
        <Navigation />
      </div>
    </div>
  );
}

export default Header;
