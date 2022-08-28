import Notiflix from 'notiflix';
let promiseCount = 0;
let delayRefValue = 0;
const refs = {
  form: document.querySelector('.form'),
  delay: document.querySelector('[name=delay]'),
  step: document.querySelector('[name=step]'),
  amount: document.querySelector('[name=amount]'),
};
refs.form.addEventListener('click', event => {
  onButtonClick(event);
});

function onButtonClick(e) {
  if (e.target.type === 'submit') {
    promiseCount = 1;
    e.preventDefault();
    delayRefValue = Number(refs.delay.value);

    const functionInterval = setInterval(() => {
      if (Number(refs.amount.value) === promiseCount) {
        clearInterval(functionInterval);
      }
      createPromise(promiseCount, delayRefValue);
    }, delayRefValue);
  }
}
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    promiseNumberCount();
    delayCount();
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve(`Fulfilled promise ${position} in ${delay}ms`);
    } else {
      reject(`Rejected promise ${position} in ${delay}ms`);
    }
  })
    .then(result => {
      Notiflix.Notify.success(result);
    })
    .catch(error => {
      Notiflix.Notify.failure(error);
    });
}

function delayCount() {
  delayRefValue += Number(refs.step.value);
}

function promiseNumberCount() {
  promiseCount += 1;
}
