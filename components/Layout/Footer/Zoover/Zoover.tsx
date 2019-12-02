import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { IZoover } from '../../../../types';
import { useAsyncEffect } from '../../../../hooks';
import { getZoover } from '../../../../api';

import './Zoover.css';

function Zoover() {
  const [zoover, setZoover] = useState<IZoover | undefined>();

  const { t } = useTranslation();

  useAsyncEffect(async () => {
    try {
      const data = await getZoover();

      setZoover(data);
    } catch {}
  }, []);

  return (
    <div className="Zoover">
      <div className="Zoover__mark">{zoover && (zoover.score || '-')}</div>
      <a
        className="Zoover_link"
        href={t('footer:zoover')}
        target="_blank"
        rel="noopener noreferrer"
      >
        {zoover && (zoover.reviews || '-')} reviews
      </a>
      <div className="Zoover__logo">
        <img src="/images/footer/zoover.svg" alt="Zoover logo" width="179px" height="50px" />
      </div>
    </div>
  );
}

export default Zoover;
