import { getCityInfo } from './API/getCityInfo';
import { getComingWeather } from './API/getComingWeather';
import { getLinkToImage } from './API/getImage';
import { getLocationInfo } from './API/getLocationInfo';
import { getWeather } from './API/getWeather';

let lng: number = 0;
let lat: number = 0;
let lang: string = 'en';
// let far1: number = Number(localStorage.getItem('far1')) || 1;
// let far2: number = Number(localStorage.getItem('far2')) || 0;
let far1: number = 1;
let far2: number = 0;
let scale: string = 'C';
let cityName: string = '';

const radioButtonC = document.querySelector<HTMLInputElement>('#radio-one');
const radioButtonF = document.querySelector<HTMLInputElement>('#radio-two');
const refreshButton = document.querySelector('.header__refresh-btn');
const searchButton = document.querySelector('.header__search-btn');
const searchField = document.querySelector<HTMLInputElement>(
  '.header__search input'
);

const weatherDegree = document.querySelector('.weateher-degree__number');
const weatherApparent = document.querySelector('.weather__apparent span');

radioButtonC!.addEventListener('change', () => {
  // localStorage.setItem('far1', '1');
  // localStorage.setItem('far2', '0');
  console.log('11', weatherDegree!.innerHTML);
  // weatherDegree!.textContent = ``;
  far1 = 1;
  far2 = 0;
  getWeather(lng, lat, far1, far2, lang);
  getComingWeather(lng, lat, far1, far2, lang);
  // console.log('C', far1, far2);
});

radioButtonF!.addEventListener('change', () => {
  // localStorage.setItem('far1', '1.8');
  // localStorage.setItem('far2', '32');
  console.log('22', weatherDegree!.innerHTML);
  far1 = 1.8;
  far2 = 32;
  getWeather(lng, lat, far1, far2, lang);
  getComingWeather(lng, lat, far1, far2, lang);
  // console.log('F', far1, far2);
});

refreshButton!.addEventListener('click', getLinkToImage);

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

getLinkToImage();
getLocationInfo(lng, lat, far1, far2, lang);
