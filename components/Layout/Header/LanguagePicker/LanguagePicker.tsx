import React from 'react';
import { useTranslation } from 'react-i18next';

import './LanguagePicker.css';

function LanguagePicker() {
  const { i18n } = useTranslation();

  function handleClick(language: 'nl' | 'fr' | 'en') {
    i18n.changeLanguage(language);
  }

  return (
    <div className="LanguagePicker">
      <button className="LanguagePicker__item" onClick={() => handleClick('nl')}>
        <img src="/icons/languages/nl.svg" alt="Dutch flag" title="NL" width="25px" height="16px" />
      </button>
      <button className="LanguagePicker__item" onClick={() => handleClick('fr')}>
        <img
          src="/icons/languages/fr.svg"
          alt="French flag"
          title="FR"
          width="25px"
          height="16px"
        />
      </button>
      <button className="LanguagePicker__item" onClick={() => handleClick('en')}>
        <img
          src="/icons/languages/en.svg"
          alt="English flag"
          title="EN"
          width="25px"
          height="16px"
        />
      </button>
    </div>
  );
}

export default LanguagePicker;
