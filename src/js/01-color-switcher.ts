const refs = {
  body: document.querySelector('body')!,
  start: document.querySelector('[data-start]')!,
  stop: document.querySelector('[data-stop]')!,
};

let backgroundChangeInterval: number |  undefined;
refs.start.addEventListener('click', onStartButtonClick);
refs.stop.addEventListener('click', onStopButtonClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onStartButtonClick() {
  backgroundChangeInterval = setInterval(changeBodyColor, 1000);
  refs.start.setAttribute('disabled', '');
}
function onStopButtonClick() {
  clearInterval(backgroundChangeInterval);
  refs.start.removeAttribute('disabled');
}
function changeBodyColor() {
  refs.body.style.backgroundColor = getRandomHexColor();
}
