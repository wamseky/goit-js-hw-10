import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const delay = document.querySelector('.delay');
const fieldset = document.querySelector('fieldset');

form.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();

  return createPromise(fieldset.children.value, delay.textContent);
}

function createPromise(prop, delay) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (prop === 'fulfilled') {
        res(
          iziToast.show({
            title: '✅',
            message: `Fulfilled promise in ${delay}ms`,
            position: 'topRight',
            color: '#B5EA7C',
            messageColor: '#ffffff',
            close: false,
            closeOnClick: true,
            progressBar: false,
          })
        );
      } else {
        rej(
          iziToast.show({
            title: '❌',
            message: `Rejected promise in ${delay}ms`,
            position: 'topRight',
            color: '#FFBEBE',
            messageColor: '#ffffff',
            close: false,
            closeOnClick: true,
            progressBar: false,
          })
        );
      }
    }, delay);
  });
}
