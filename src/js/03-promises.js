import Notiflix from 'notiflix';

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
    let delayRefValue = Number(refs.delay.value);
    e.preventDefault();

    for (let i = 0; i < refs.amount.value; i += 1) {
      createPromise(i + 1, delayRefValue)
        .then(result => {
          Notiflix.Notify.success(result);
        })
        .catch(error => {
          Notiflix.Notify.failure(error);
        });
      delayRefValue += Number(refs.step.value);
    }
  }
}
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
}
