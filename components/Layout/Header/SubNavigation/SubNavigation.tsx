import React from 'react';
import { useTranslation } from 'react-i18next';

import Item from './Item';

import './SubNavigation.css';

function SubNavigation() {
  const { t } = useTranslation();

  return (
    <div className="SubNavigation">
      <div className="SubNavigation__container">
        <Item
          href="/campsite"
          as={t('navigation:campsite.path')}
          color="var(--color-primary)"
          label={t('navigation:campsite.label')}
          icon={
            <img src="/icons/menu/campsite.svg" alt="Campsite icon" width="85px" height="85px" />
          }
        />
        <Item
          href="/rentals"
          as={t('navigation:rentals.path')}
          color="var(--color-secondary)"
          label={t('navigation:rentals.label')}
          icon={<img src="/icons/menu/rentals.svg" alt="Rentals icon" width="85px" height="85px" />}
        />
        <Item
          href="/prices"
          as={t('navigation:prices.path')}
          color="var(--color-tertiary)"
          label={t('navigation:prices.label')}
          icon={<img src="/icons/menu/prices.svg" alt="Prices icon" width="85px" height="85px" />}
        />
        <Item
          href="/booking"
          as={t('navigation:booking.path')}
          color="var(--color-quaternary)"
          label={t('navigation:booking.label')}
          icon={<img src="/icons/menu/booking.svg" alt="Booking icon" width="85px" height="85px" />}
        />
      </div>
    </div>
  );
}

export default SubNavigation;
