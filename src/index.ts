import { getCityInfo } from './API/getCityInfo';
import { getComingWeather } from './API/getComingWeather';
import { getLinkToImage } from './API/getImage';
import { getLocationInfo } from './API/getLocationInfo';
import { getWeather } from './API/getWeather';

let lng: number = 0;
let lat: number = 0;
let lang: string = 'en';
let far1: number = 1;
let far2: number = 0;
let cityName: string = '';

const radioButtonC = document.querySelector<HTMLInputElement>('#radio-one');
const radioButtonF = document.querySelector<HTMLInputElement>('#radio-two');

radioButtonC!.addEventListener('change', () => {
  far1 = 1;
  far2 = 0;
  getWeather(lng, lat, far1, far2, lang);
  getComingWeather(lng, lat, far1, far2, lang);
});

radioButtonF!.addEventListener('change', () => {
  far1 = 1.8;
  far2 = 32;
  getWeather(lng, lat, far1, far2, lang);
  getComingWeather(lng, lat, far1, far2, lang);
});

const refreshButton = document.querySelector('.header__refresh-btn');

getLinkToImage();

refreshButton!.addEventListener('click', getLinkToImage);

const searchButton = document.querySelector('.header__search-btn');
const searchField = document.querySelector<HTMLInputElement>(
  '.header__search input'
);

searchField!.addEventListener('input', (e) => {
  const target = e.target as HTMLInputElement;
  if (target) {
    cityName = target.value;
    console.log('inp', target.value);
  }
});

searchField!.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') getCityInfo(cityName, lng, lat, far1, far2, lang);
});

searchButton!.addEventListener('click', () => {
  getCityInfo(cityName, lng, lat, far1, far2, lang);
});

getLocationInfo(lng, lat, far1, far2, lang);
