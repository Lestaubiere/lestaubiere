import React from 'react';
import { useTranslation } from 'react-i18next';

import './Facebook.css';

function Facebook() {
  const { t } = useTranslation();

  return (
    <a
      className="Facebook"
      href="https://www.facebook.com/CampingLestaubiere/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="Facebook__logo">
        <img src="/images/footer/facebook.svg" alt="Zoover logo" width="200px" height="41px" />
      </div>
      <div className="Facebook__label">{t('footer:facebook')}</div>
    </a>
  );
}

export default Facebook;
