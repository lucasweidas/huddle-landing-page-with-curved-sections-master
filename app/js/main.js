import '../scss/main.scss';

const form = document.querySelector('[data-js="form"]');

form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(evt) {
  evt.preventDefault();
  validateEmail();
}

function validateEmail() {
  const inputEmail = document.querySelector('[data-js="inp-email"]');
  const email = inputEmail.value.trim();
  const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (!regex.test(email)) {
    inputEmail.classList.add('invalid');
    inputEmail.setAttribute('aria-invalid', 'true');
    inputEmail.setAttribute('aria-errormessage', 'Invalid email address');
    return;
  }

  inputEmail.classList.remove('invalid');
  inputEmail.removeAttribute('aria-invalid');
  inputEmail.removeAttribute('aria-errormessage');
}
