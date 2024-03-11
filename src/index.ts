import { getCityInfo } from './API/getCityInfo';
import { getComingWeather } from './API/getComingWeather';
import { getLinkToImage } from './API/getImage';
import { getLocationInfo } from './API/getLocationInfo';
import { getWeather } from './API/getWeather';

let lng: number = 0;
let lat: number = 0;
let lang: string = localStorage.getItem('lang') || 'en';
let far1: number = Number(localStorage.getItem('far1')) || 1;
let far2: number = Number(localStorage.getItem('far2')) || 0;
let scale: string = localStorage.getItem('scale') || 'C';
let cityName: string = '';

export function setLocation(longitude: number, latitude: number) {
  lng = longitude;
  lat = latitude;
}

const radioButtonC = document.querySelector<HTMLInputElement>('#radio-one');
const radioButtonF = document.querySelector<HTMLInputElement>('#radio-two');
const radioButtons = document.querySelectorAll<HTMLInputElement>(
  '.header__radio input'
);
const refreshButton = document.querySelector('.header__refresh-btn');
const searchButton = document.querySelector('.header__search-btn');
const searchField = document.querySelector<HTMLInputElement>(
  '.header__search input'
);
const selectLang = document.querySelector(
  '.header__select'
) as HTMLSelectElement;

selectLang!.value = lang;
selectLang!.addEventListener('change', SaveSelectValue);

function SaveSelectValue(e: Event) {
  let target = e.target as HTMLOptionElement;
  localStorage.setItem('lang', target.value);
}

for (let i = 0; i < radioButtons!.length; i++) {
  if (radioButtons[i].value === scale) {
    radioButtons[i].checked = true;
  }
}

radioButtonC!.addEventListener('change', () => {
  localStorage.setItem('far1', '1');
  localStorage.setItem('far2', '0');
  far1 = 1;
  far2 = 0;
  localStorage.setItem('scale', 'C');
  getWeather(lng, lat, far1, far2, lang);
  getComingWeather(lng, lat, far1, far2, lang);
});

radioButtonF!.addEventListener('change', () => {
  localStorage.setItem('far1', '1.8');
  localStorage.setItem('far2', '32');
  far1 = 1.8;
  far2 = 32;
  localStorage.setItem('scale', 'F');
  getWeather(lng, lat, far1, far2, lang);
  getComingWeather(lng, lat, far1, far2, lang);
});

refreshButton!.addEventListener('click', getLinkToImage);

searchField!.addEventListener('input', (e) => {
  const target = e.target as HTMLInputElement;
  if (target) {
    cityName = target.value;
    // console.log('inp', target.value);
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
