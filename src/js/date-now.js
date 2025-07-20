const listEl = document.querySelector('.js-data');
const formEl = document.querySelector('.js-data-feedback-form');

const arrMonths = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const monthNames = [
  'January',
  'February',
  'Mart',
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

const getLastDayByMonthTemplates = date => {
  const day = String(date.getDate()).padStart(2, '0');
  const monthNum = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  const monthName = monthNames[date.getMonth()];

  return `<li class="item-data"><p>${day}.${monthNum}.${year} - ${monthName}</p></li>`;
};

// const getLastDayByMonthTemplates = date => {
//   const formatted = date.toLocaleDateString();
//   return `<li class="item-data"><p>${formatted}</p></li>`;
// };

const getLastDayByMonth = (year, months) => {
  const dates = months.map(month => new Date(year, month + 1, 0));
  listEl.innerHTML = dates.map(getLastDayByMonthTemplates).join('');
};

formEl.addEventListener('input', () => {
  const yearValue = formEl.elements.year.value.trim();
  const monthValue = formEl.elements.month.value.trim();

  if (!yearValue) {
    listEl.innerHTML = '<li>Enter year</li>';
    return;
  }

  const year = Number(yearValue);

  if (monthValue === '') {
    getLastDayByMonth(year, arrMonths);
  } else {
    const month = Number(monthValue);
    if (month < 1 || month > 12) {
      listEl.innerHTML = '<li>The month must be between 1 and 12</li>';
      return;
    }

    getLastDayByMonth(year, [month - 1]);
  }
});
