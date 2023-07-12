import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form')!,
  delay: document.querySelector<HTMLInputElement>('[name=delay]')!,
  step: document.querySelector<HTMLInputElement>('[name=step]')!,
  amount: document.querySelector<HTMLInputElement>('[name=amount]')!,
};
refs.form.addEventListener('click', onButtonClick);

function onButtonClick(e: Event) {
  const submitButton = e.target as HTMLButtonElement;
  if (submitButton.type === 'submit') {
    let delayRefValue = Number(refs.delay.value);
    e.preventDefault();

    for (let i = 0; i < Number(refs.amount.value); i += 1) {
      createPromise(i + 1, delayRefValue)
        .then((result) => {
          Notiflix.Notify.success(result as string);
        })
        .catch(error => {
          Notiflix.Notify.failure(error);
        });
      delayRefValue += Number(refs.step.value);
    }
  }
}
function createPromise(position: number, delay: number) {
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
