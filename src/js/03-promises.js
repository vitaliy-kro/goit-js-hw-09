import Notiflix from 'notiflix';
let promiseCount = 1;
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
  promiseCount = 1;
  if (e.target.type === 'submit') {
    e.preventDefault();
    delayRefValue = Number(refs.delay.value);
    const functionInterval = setInterval(() => {
      if (Number(refs.amount.value) === promiseCount) {
        clearInterval(functionInterval);
      }
      createPromise(promiseCount, delayRefValue)
        .then(result => {
          Notiflix.Notify.success(result);
        })
        .catch(error => {
          Notiflix.Notify.failure(error);
        });
    }, delayRefValue);
  }
}
function createPromise(position, delay) {
  promiseCount += 1;
  return new Promise((resolve, reject) => {
    delayRefValue += Number(refs.step.value);
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve(`Fulfilled promise ${position} in ${delay}ms`);
    } else {
      reject(`Rejected promise ${position} in ${delay}ms`);
    }
  });
}
