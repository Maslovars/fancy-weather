// open weather 0641c3106fa3d3fa016ec560e68435c1

const APIkey = '0641c3106fa3d3fa016ec560e68435c1';
const weatherDegree = document.querySelector('.weateher-degree__number');
const weatherSummary = document.querySelector('.weather__summary');
const weatherApparent = document.querySelector('.weather__apparent span');
const weatherWind = document.querySelector('.weather__wind span');
const weatherHumidity = document.querySelector('.weather__humidity span');

export async function getWeather(
  lng: number,
  lat: number,
  far1: number,
  far2: number,
  lang: string
) {
  try {
    console.log('weather', far1, far2, lng, lat);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&exclude={part}&appid=${APIkey}&units=metric&lang=${lang}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    weatherDegree!.textContent = `${Math.round(data.main.temp * far1 + far2)}`;
    weatherSummary!.textContent = `${data.weather[0].main}`;
    weatherApparent!.textContent = `${Math.round(
      data.main.feels_like * far1 + far2
    )}`;
    weatherWind!.textContent = `${Math.round(data.wind.speed)}`;
    weatherHumidity!.textContent = `${Math.round(data.main.humidity)}`;
  } catch (error) {
    console.log(error);
  }
}
