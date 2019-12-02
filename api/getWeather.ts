import { IWeather } from '../types';
import { BASE_API_URL } from '../config';

async function getWeather(): Promise<IWeather> {
  const url = new URL(`${BASE_API_URL}/weather/current`);

  const response = await fetch(url.href);

  if (!response.ok) {
    throw response;
  }

  const data = await response.json();

  return data;
}

export default getWeather;
