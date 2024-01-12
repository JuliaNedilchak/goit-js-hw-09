const form = document.querySelector('.feedback-form');
const keyValue = 'feedback-form-state';

form.addEventListener('input', event => {
  const inputText = event.target.value;

  localStorage.setItem(keyValue, inputText);
});

form.addEventListener('submit', event => {
  const email = form.elements.email.value;
  const message = form.elements.message.value;
  event.preventDefault();
  if (!email || !message) {
    alert('empty fields');
  } else {
    const storageValue = JSON.parse(localStorage.getItem(keyValue));
    localStorage.removeItem(keyValue);
    form.reset();
    console.log(storageValue);
  }
});
