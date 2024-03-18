const date = document.querySelector('.info__date');

export const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
export const months = [
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

export function getDate() {
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
