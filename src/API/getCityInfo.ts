import { getComingWeather } from './getComingWeather';
import { getDate } from './getDate';
import { getLinkToImage } from './getImage';
import { getMap } from './getMap';
import { getWeather } from './getWeather';
import { setLocation } from '../index';

const APIkey = '0641c3106fa3d3fa016ec560e68435c1';
const h1 = document.querySelector('.info__location');
const latitude = document.querySelector('.map-latitude__span');
const longitude = document.querySelector('.map-longitude__span');

export async function getCityInfo(
  cityName: string,
  lng: number,
  lat: number,
  far1: number,
  far2: number,
  lang: string
) {
  try {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=3&appid=${APIkey}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data[0]);
    // console.log('123', Array.from(data[0].lon.toString())[0]);
    h1!.textContent = `${
      lang === 'en' ? data[0].local_names.en : data[0].local_names.ru
    }, ${data[0].country} `;
    latitude!.textContent = `${Math.floor(data[0].lat)}°
    ${
      Array.from(data[0].lat.toString())[0] === '-'
        ? data[0].lat.toString().slice(4, 6)
        : data[0].lat.toString().slice(3, 5)
    }'`;
    lat = data[0].lat;
    longitude!.textContent = `${Math.floor(data[0].lon)}°
    ${
      Array.from(data[0].lon.toString())[0] === '-'
        ? data[0].lon.toString().slice(4, 6)
        : data[0].lon.toString().slice(3, 5)
    }'`;
    lng = data[0].lon;

    setLocation(lng, lat);
    getLinkToImage();
    getDate();
    getMap(lng, lat);
    getWeather(lng, lat, far1, far2, lang);
    getComingWeather(lng, lat, far1, far2, lang);
  } catch (error) {
    console.log(error);
  }
}
