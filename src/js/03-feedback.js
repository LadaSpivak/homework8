import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector(`.feedback-form`);

// Filling form fields with store locale values

const fieldsFilling = () => {
  for (const property in tempObject) {
    feedbackForm.elements[property].value = tempObject[property];
  }
};

// Change value in form fields

const changeFormFields = event => {
  const { target } = event;
  const fieldValue = target.value;
  const fieldName = target.name;
  tempObject[fieldName] = fieldValue;
  serializeObject();
};

// Export to Local Store

const serializeObject = () =>
  localStorage.setItem(`feedback-form-state`, JSON.stringify(tempObject));

// Import from Local Store

const deserializeObject = () =>
  JSON.parse(localStorage.getItem(`feedback-form-state`));

// Initialize object variable

let tempObject = deserializeObject() != null ? deserializeObject() : {};

// Submit event

const submitForm = () => {
  event.preventDefault();
  localStorage.clear();
  feedbackForm.reset();
  console.log(tempObject);
  tempObject = {};
};

// Main method (Start point)

deserializeObject();
fieldsFilling();
feedbackForm.addEventListener(`input`, throttle(changeFormFields, 500));
feedbackForm.lastElementChild.addEventListener(`click`, submitForm);
