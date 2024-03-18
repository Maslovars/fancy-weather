import { days, months } from './getDate';

const time = document.querySelector('.info__time');
const date = document.querySelector('.info__date');

export async function setTime(lng: number, lat: number) {
  // http://api.timezonedb.com/v2.1/get-time-zone?key=7SLSYGB918OC&format=xml&by=position&lat=40.689247&lng=-74.044502
  let day;
  let month;

  try {
    const url = `http://api.timezonedb.com/v2.1/get-time-zone?key=7SLSYGB918OC&format=json&by=position&lat=${lat}&lng=${lng}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log('local time', data.formatted);

    days.forEach((d, i) => {
      if (i === new Date(data.formatted).getDay()) day = d;
    });

    months.forEach((m, i) => {
      if (i === new Date(data.formatted).getMonth()) month = m;
    });

    date!.textContent = `${day} ${new Date(data.formatted).getDate()} ${month}`;

    setInterval(() => {
      time!.textContent = `${new Date(data.formatted).getHours()}:${
        new Date(data.formatted).getMinutes() > 9
          ? new Date(data.formatted).getMinutes()
          : '0' + new Date(data.formatted).getMinutes()
      }:${
        new Date(data.formatted).getSeconds() > 9
          ? new Date(data.formatted).getSeconds()
          : '0' + new Date(data.formatted).getSeconds()
      }`;
    }, 1000);
  } catch (error) {
    console.log(error);
  }
}
