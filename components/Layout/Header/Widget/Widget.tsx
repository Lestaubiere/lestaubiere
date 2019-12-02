import React, { useState, Fragment } from 'react';
import { useTranslation } from 'react-i18next';

import { IWeather } from '../../../../types';
import { useAsyncEffect } from '../../../../hooks';
import { getWeather } from '../../../../api';

import 'weathericons/css/weather-icons.css';

import './Widget.css';

function Widget() {
  const [weather, setWeather] = useState<IWeather | undefined>();

  const { t } = useTranslation();

  useAsyncEffect(async () => {
    try {
      const data = await getWeather();

      setWeather(data);
    } catch {}
  }, []);

  function renderWeather() {
    if (weather) {
      const currentHours = new Date().getHours();
      const isDay = currentHours >= 7 && currentHours <= 20;

      return (
        <Fragment>
          {weather.code && (
            <span
              className={`Widget__weather-value-icon wi wi-owm-${isDay ? 'day' : 'night'}-${
                weather.code
              }`}
            />
          )}
          <span className="Widget__weather-value-temperature">{weather.temperature || '-'} °C</span>
        </Fragment>
      );
    }

    return '- °C';
  }

  return (
    <div className="Widget">
      <div className="Widget__dates">
        <div className="Widget__opening-date">
          <div className="Widget__date-label">{t('widget:opening')}</div>
          <div className="Widget__date-value">
            <span className="Widget__date-day">{t('widget:opening_day')}</span>{' '}
            {t('widget:opening_month')}
          </div>
        </div>
        <div className="Widget__closing-date">
          <div className="Widget__date-label">{t('widget:closing')}</div>
          <div className="Widget__date-value">
            <span className="Widget__date-day">{t('widget:closing_day')}</span>{' '}
            {t('widget:closing_month')}
          </div>
        </div>
      </div>
      <div className="Widget__weather">
        <div className="Widget__weather-label">{t('widget:weather')}</div>
        <div className="Widget__weather-value">{renderWeather()}</div>
      </div>
    </div>
  );
}

export default Widget;
