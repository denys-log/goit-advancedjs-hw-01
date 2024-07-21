const DEFAULT_FORM_VALUES = { email: '', message: '' };
const formDataFromStorage = localStorage.getItem('feedback-form-state');
let formData = formDataFromStorage
  ? JSON.parse(formDataFromStorage)
  : DEFAULT_FORM_VALUES;

const form = document.querySelector('.feedback-form');

const inputs = form.querySelectorAll('input, textarea');
inputs.forEach(input => (input.value = formData[input.name]));

form.addEventListener('input', e => {
  formData[e.target.name] = e.target.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', e => {
  e.preventDefault();

  let isSomeFieldEmpty = Object.keys(formData).some(key => !formData[key]);
  if (isSomeFieldEmpty) {
    alert('Fill please all fields');
  } else {
    console.log('formData', formData);
    formData = DEFAULT_FORM_VALUES;
    localStorage.removeItem('feedback-form-state');
    form.reset();
  }
});
