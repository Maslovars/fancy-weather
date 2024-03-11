const comingWeather = document.querySelector('.coming-weather');
const APIkey = '0641c3106fa3d3fa016ec560e68435c1';

export async function getComingWeather(
  lng: number,
  lat: number,
  far1: number,
  far2: number,
  lang: string
) {
  const daysFull = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  try {
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&cnt=30&appid=${APIkey}&units=metric&lang=${lang}`;
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data);
    comingWeather!.innerHTML = '';
    data.list.forEach((el: any, ind: number) => {
      if (ind === 8 || ind === 16 || ind === 24) {
        // console.log('day', daysFull[new Date(el.dt_txt).getDay()]);
        // console.log('dt_txt', el.dt_txt);
        let nextDay = `
        <div class="coming-weather__item">
        <div class="coming-weather__day">${
          daysFull[new Date(el.dt_txt).getDay()]
        }</div>
        <div class="coming-weather__block">
          <div class="coming-weather__degree">${Math.round(
            el.main.temp * far1 + far2
          )}°</div>
          <div class="coming-weather__icon">
            <img src="/icons/weather-small.svg" alt="weather icon">
          </div>
        </div>
      </div>
        `;
        comingWeather!.innerHTML += nextDay;
        console.log('cweath', Math.round(el.main.temp * far1 + far2));
      }
    });
  } catch (error) {
    console.log(error);
  }
}
