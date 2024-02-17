import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const delay = document.querySelector('.delay');
const fieldset = document.querySelector('fieldset');
const createBtn = document.querySelector('.create-btn');

createBtn.addEventListener('click', createPromise);

function createPromise() {
  form.preventDefault();

  return fieldset.children.value('fulfilled')
    ? setTimeout(() => {
        Promise.resolve(
            iziToast.show({
              title: '✅',
              message: `Fulfilled promise in ${delay}ms`,
              position: 'topRight',
              background: '#59A10D',
            })
          )
    }, delay.textContent())
    : setTimeout(() => {
        Promise.reject(
            iziToast.show({
              title: '❌',
              message: `Rejected promise in ${delay}ms`,
              position: 'topRight',
              background: '#EF4040',
            })
          );
    }, delay.textContent());
}