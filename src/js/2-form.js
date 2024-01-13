const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
const formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim();

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  const email = form.elements.email.value;
  const message = form.elements.message.value;
  event.preventDefault();
  if (!email || !message) {
    alert('empty fields');
  } else {
    const formObject = JSON.parse(localStorage.getItem(STORAGE_KEY));
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
    console.log(formObject);
  }
});
