const refs = {
  body: document.querySelector('body'),
  start: document.querySelector('[data-start]'),
  stop: document.querySelector('[data-stop]'),
};

let isStarted = false;
let backgroundChangeInterval = null;
refs.start.addEventListener('click', onStartButtonClick);
refs.stop.addEventListener('click', onStopButtonClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onStartButtonClick() {
  if (isStarted) return;
  backgroundChangeInterval = setInterval(changeBodyColor, 1000);
}
function onStopButtonClick() {
  isStarted = false;
  clearInterval(backgroundChangeInterval);
}
function changeBodyColor() {
  isStarted = true;
  refs.body.style.backgroundColor = getRandomHexColor();
}
