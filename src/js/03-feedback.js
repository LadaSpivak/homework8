import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

let formData = {};

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('input', throttle(onInputTextarea, 500));
refs.form.addEventListener('submit', onFormSubmit);

initInputTextarea();

function onInputTextarea(event) {
    formData = {
        email: refs.input.value.trim(),
        message: refs.textarea.value.trim(),
    };

    const formDataJSON = JSON.stringify(formData);
    localStorage.setItem(STORAGE_KEY, formDataJSON);
};

function onFormSubmit(event) {
    event.preventDefault();

    const { email, message } = event.currentTarget.elements;

    if (email.value.trim() !== '' && message.value.trim() !== '') {
        console.log({ email: email.value.trim(), message: message.value.trim() });
        event.currentTarget.reset();
        formData = {};
        localStorage.removeItem(STORAGE_KEY);
    } else {
        if (email.value.trim() === '') {
            alert('Please fill in both fields: email and message');
            email.focus();
        } else {
            alert('Please fill in both fields: email and message');
            message.focus();
        }
    }
}

function initInputTextarea() {
    try {
        const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
        if (savedData) {
            refs.input.value = savedData.email;
            refs.textarea.value = savedData.message;
        }
    } catch (error) {
        return;
    }
}
