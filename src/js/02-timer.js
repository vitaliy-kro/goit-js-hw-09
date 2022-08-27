import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
const refs = {
  date: document.querySelector(['#datetime-picker']),
  buttonStart: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};
let isValid = null;
let choosenDate = null;
let timeToEnd = null;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() <= Date.now()) {
      isValid = false;
      Notiflix.Notify.failure('Please choose a date in the future');
      return;
    }
    isValid = true;
    choosenDate = selectedDates[0].getTime();
    Notiflix.Notify.info('Press the start-button to start the timer');
  },
};

flatpickr(refs.date, options);

refs.buttonStart.addEventListener('click', onButtonStartClick);

function onButtonStartClick() {
  if (!isValid) {
    Notiflix.Notify.failure('Please choose a date in the future');
    return;
  }
  timer();
  Notiflix.Notify.success('Timer starts!');
}

function timer() {
  const time = setInterval(() => {
    const currentTime = Date.now();
    timeToEnd = choosenDate - currentTime;
    onDisplayTimeSet(convertMs(timeToEnd));
    if (timeToEnd < 1000) {
      Notiflix.Notify.info('Timer has expired');
      clearInterval(time);
    }
  }, 1000);
}
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function onDisplayTimeSet({ days, hours, minutes, seconds }) {
  refs.days.textContent = days;
  refs.hours.textContent = hours;
  refs.minutes.textContent = minutes;
  refs.seconds.textContent = seconds;
}
