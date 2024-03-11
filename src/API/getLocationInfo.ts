import { getComingWeather } from './getComingWeather';
import { getDate } from './getDate';
import { getMap } from './getMap';
import { getTime } from './getTime';
import { getWeather } from './getWeather';

// API KEY 66D3316E86916E3DEDD65436F5E5987D https://api.ip2location.io/?key=66D3316E86916E3DEDD65436F5E5987D&ip=37.214.55.175&format=json
// token 7294e3d66a4e34 https://ipinfo.io?callback=callback&token=7294e3d66a4e34

const h1 = document.querySelector('.info__location');
const latitude = document.querySelector('.map-latitude__span');
const longitude = document.querySelector('.map-longitude__span');

export async function getLocationInfo(
  lng: number,
  lat: number,
  far1: number,
  far2: number,
  lang: string
) {
  try {
    const url = 'https://api.ip2location.io/';
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    h1!.textContent = `${data.city_name}, ${data.country_name} `;
    latitude!.textContent = `${Math.floor(data.latitude)}°
    ${data.latitude.toString().slice(3, 5)}'`;
    lat = data.latitude;
    longitude!.textContent = `${Math.floor(data.longitude)}°
    ${data.longitude.toString().slice(3, 5)}'`;
    lng = data.longitude;

    getDate();
    getTime();
    getMap(lng, lat);
    getWeather(lng, lat, far1, far2, lang);
    getComingWeather(lng, lat, far1, far2, lang);
  } catch (error) {
    console.log(error);
  }
}
