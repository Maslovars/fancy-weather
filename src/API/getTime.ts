const time = document.querySelector('.info__time');

export function getTime() {
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
}
