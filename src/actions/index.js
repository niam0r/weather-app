import axios from 'axios';

const API_KEY = 'ba576edd191248602bc49dfeba2aca48';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},uk`;
  const request = axios.get(url);
  // const request = fetch(url);

  console.log('Request:', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
