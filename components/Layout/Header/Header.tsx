import React from 'react';

import Navigation from './Navigation';
import LanguagePicker from './LanguagePicker';
import Widget from './Widget';
import SubNavigation from './SubNavigation';

import './Header.css';

function Header() {
  return (
    <div className="Header">
      <div className="Header__top-bar">
        <div className="Header__top-bar-container">
          <img
            src="/images/header/logo.svg"
            alt="Logo Camping Lestaubière"
            width="168px"
            height="50px"
          />
          <Navigation />
          <LanguagePicker />
        </div>
      </div>
      <div className="Header__content">
        <h1 className="Header__title">Bienvenue au Camping Lestaubière</h1>
        <Widget />
      </div>
      <SubNavigation />
    </div>
  );
}

export default Header;
