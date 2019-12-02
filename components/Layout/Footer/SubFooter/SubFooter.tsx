import React from 'react';
import RouterLink from 'next/link';
import { useTranslation } from 'react-i18next';

import './SubFooter.css';

function SubFooter() {
  const { t } = useTranslation();

  const date = new Date();

  return (
    <div className="SubFooter">
      <div className="SubFooter__container">
        <div className="SubFooter__links">
          <RouterLink href="/mentions-legales" as={t('navigation:legalMentions.path')}>
            <a className="SubFooter__link">{t('navigation:legalMentions.label')}</a>
          </RouterLink>
          <RouterLink href="/privacy" as={t('navigation:privacy.path')}>
            <a className="SubFooter__link">{t('navigation:privacy.label')}</a>
          </RouterLink>
        </div>
        <div className="SubFooter__copyright">© {date.getFullYear()} - SARL Lestaubière</div>
      </div>
    </div>
  );
}

export default SubFooter;
