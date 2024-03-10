const body = document.body;
const refreshButton = document.querySelector('.header__refresh-btn');
// Key: e603766b06c2db59dbb2b28734620817

async function getLinkToImage() {
  try {
    const randomNumber = Math.floor(Math.random() * 100);
    const url =
      'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=e603766b06c2db59dbb2b28734620817&tags=nature,spring,morning&tag_mode=all&extras=url_h&format=json&nojsoncallback=1';
    const res = await fetch(url);
    const data = await res.json();
    console.log('pic', data.photos.photo[randomNumber].url_h);
    if (data.photos.photo[randomNumber].url_h) {
      body.style.background = `url(${data.photos.photo[randomNumber].url_h}) no-repeat`;
    } else {
      body.style.background = `url(${data.photos.photo[1].url_h}) no-repeat`;
    }
    body.style.backgroundSize = 'cover';
  } catch (error) {
    console.log(error);
  }
}

getLinkToImage();

refreshButton!.addEventListener('click', getLinkToImage);

// API KEY 66D3316E86916E3DEDD65436F5E5987D https://api.ip2location.io/?key=66D3316E86916E3DEDD65436F5E5987D&ip=37.214.55.175&format=json
// token 7294e3d66a4e34 https://ipinfo.io?callback=callback&token=7294e3d66a4e34

const h1 = document.querySelector('.info__location');
const latitude = document.querySelector('.map-latitude__span');
const longitude = document.querySelector('.map-longitude__span');
const date = document.querySelector('.info__date');
const time = document.querySelector('.info__time');
let lng: number;
let lat: number;
let lang: string = 'en';

async function getLocation() {
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
    getMap(lng, lat);
    getWeather(lng, lat);
  } catch (error) {
    console.log(error);
  }
}

function getDate() {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  let day;
  let month;

  days.forEach((d, i) => {
    if (i === new Date().getDay()) day = d;
  });

  months.forEach((m, i) => {
    if (i === new Date().getMonth()) month = m;
  });

  date!.textContent = `${day} ${new Date().getDate()} ${month}`;
}

setInterval(() => {
  time!.textContent = `${new Date().getHours()}:${
    new Date().getMinutes() > 9
      ? new Date().getMinutes()
      : '0' + new Date().getMinutes()
  }:${
    new Date().getSeconds() > 9
      ? new Date().getSeconds()
      : '0' + new Date().getSeconds()
  }`;
}, 1000);

import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken =
  'pk.eyJ1IjoibWFzbG92YXJzIiwiYSI6ImNrdXF5ZXV3dTJsenAyd282aHBzdTUxcHQifQ.T4fiehpdSudBKAd0wV3H2w';

function getMap(lng: number, lat: number) {
  try {
    const map = new mapboxgl.Map({
      container: 'map__field', // container ID
      center: [lng, lat], // starting position [lng, lat]
      zoom: 10, // starting zoom
    });
  } catch (error) {
    console.log(error);
  }
}

// getMap(27.56, 53.9);

// open weather 0641c3106fa3d3fa016ec560e68435c1

const APIkey = '0641c3106fa3d3fa016ec560e68435c1';
const weatherDegree = document.querySelector('.weateher-degree__number');
const weatherSummary = document.querySelector('.weather__summary');
const weatherApparent = document.querySelector('.weather__apparent span');
const weatherWind = document.querySelector('.weather__wind span');
const weatherHumidity = document.querySelector('.weather__humidity span');

async function getWeather(lng: number, lat: number) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&exclude={part}&appid=${APIkey}&units=metric&lang=${lang}`;
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  weatherDegree!.textContent = `${Math.round(data.main.temp)}`;
  weatherSummary!.textContent = `${data.weather[0].main}`;
  weatherApparent!.textContent = `${Math.round(data.main.feels_like)}`;
  weatherWind!.textContent = `${Math.round(data.wind.speed)}`;
  weatherHumidity!.textContent = `${Math.round(data.main.humidity)}`;
}

getLocation();
