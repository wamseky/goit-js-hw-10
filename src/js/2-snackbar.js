import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const delay = document.querySelector('.delay');
const fieldset = document.querySelector('fieldset');

form.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();

  const delay = evt.currentTarget.elements.delay.value;
  const prop = evt.currentTarget.elements.state.value

  createPromise(prop, delay)
    .then((res) =>
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
      )
      .catch((rej) =>
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

      evt.currentTarget.reset();
}

function createPromise(prop, delay) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (prop === 'fulfilled') {
        res();
      } else {
        rej();
      }
    }, delay);
  });
}
