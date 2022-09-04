const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('.feedback-form textarea');
const email = document.querySelector('.feedback-form input');

const STG_KEY = 'formStorage';
const formStorage = {};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onNameInput, 500));
textarea.addEventListener('input', throttle(onTextAreaInput, 500));
email.addEventListener('input', throttle(onTextAreaInput, 500));

function onNameInput(event) {
  formStorage[event.target.name] = event.target.value;

  console.log(formStorage);

  localStorage.setItem(STG_KEY, JSON.stringify(formStorage));
}

function onFormSubmit(event) {
  event.preventDefault();
  console.log(formStorage);
  event.target.reset();
  localStorage.removeItem(STG_KEY);
}

function onTextAreaInput(event) {
  const messageValue = event.target.value;
  localStorage.setItem(STG_KEY, messageValue);
}

function onRefreshPage() {
  const localSaveMessage = JSON.parse(localStorage.getItem(STG_KEY));

  if (localSaveMessage?.email) {
    email.value = localSaveMessage.email;
  }
  if (localSaveMessage?.message) {
    textarea.value = localSaveMessage.message;
  }
}

onRefreshPage();
