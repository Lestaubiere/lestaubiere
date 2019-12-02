import React from 'react';
import RouterLink from 'next/link';
import { useTranslation } from 'react-i18next';

import './Menu.css';

function Menu() {
  const { t } = useTranslation();

  return (
    <div className="FooterMenu">
      <div className="FooterMenu__title">Menu</div>
      <nav className="FooterMenu__links">
        <RouterLink href="/" as={t('navigation:home.path')}>
          <a className="FooterMenu__link">{t('navigation:home.label')}</a>
        </RouterLink>
        <RouterLink href="/campsite" as={t('navigation:campsite.path')}>
          <a className="FooterMenu__link">{t('navigation:campsite.label')}</a>
        </RouterLink>
        <RouterLink href="/leisure" as={t('navigation:leisure.path')}>
          <a className="FooterMenu__link">{t('navigation:leisure.label')}</a>
        </RouterLink>
        <RouterLink href="/facilities" as={t('navigation:facilities.path')}>
          <a className="FooterMenu__link">{t('navigation:facilities.label')}</a>
        </RouterLink>
        <RouterLink href="/rentals" as={t('navigation:rentals.path')}>
          <a className="FooterMenu__link">{t('navigation:rentals.label')}</a>
        </RouterLink>
        <RouterLink href="/surroundings" as={t('navigation:surroundings.path')}>
          <a className="FooterMenu__link">{t('navigation:surroundings.label')}</a>
        </RouterLink>
        <RouterLink href="/prices" as={t('navigation:prices.path')}>
          <a className="FooterMenu__link">{t('navigation:prices.label')}</a>
        </RouterLink>
        <RouterLink href="/booking" as={t('navigation:booking.path')}>
          <a className="FooterMenu__link">{t('navigation:booking.label')}</a>
        </RouterLink>
        <RouterLink href="/contact" as={t('navigation:contact.path')}>
          <a className="FooterMenu__link">{t('navigation:contact.label')}</a>
        </RouterLink>
      </nav>
    </div>
  );
}

export default Menu;
