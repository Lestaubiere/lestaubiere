import { IZoover } from '../types';
import { BASE_API_URL } from '../config';

async function getZoover(): Promise<IZoover> {
  const url = new URL(`${BASE_API_URL}/zoover`);

  const response = await fetch(url.href);

  if (!response.ok) {
    throw response;
  }

  const data = await response.json();

  return data;
}

export default getZoover;
