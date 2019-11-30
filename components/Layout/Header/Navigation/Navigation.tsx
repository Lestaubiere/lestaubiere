import React from 'react';
import { useTranslation } from 'react-i18next';

import Link from './Link';

import './Navigation.css';

function Navigation() {
  const { t, i18n } = useTranslation();

  return (
    <nav className="Navigation">
      <Link href="/" as={t('navigation:home.path')}>
        <span>{t('navigation:home.label')}</span>
      </Link>
      <Link href="/leisure" as={t('navigation:leisure.path')}>
        <span>{t('navigation:leisure.label')}</span>
      </Link>
      <Link href="/facilities" as={t('navigation:facilities.path')}>
        <span>{t('navigation:facilities.label')}</span>
      </Link>
      <Link href="/surroundings" as={t('navigation:surroundings.path')}>
        <span>{t('navigation:surroundings.label')}</span>
      </Link>
      {i18n.language === 'nl' && (
        <Link href="/vacatures" as={t('navigation:vacatures.path')}>
          <span>{t('navigation:vacatures.label')}</span>
        </Link>
      )}
      <Link href="/contact" as={t('navigation:contact.path')}>
        <span>{t('navigation:contact.label')}</span>
      </Link>
    </nav>
  );
}

export default Navigation;
