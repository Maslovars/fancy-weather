const date = document.querySelector('.info__date');

export function getDate() {
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
