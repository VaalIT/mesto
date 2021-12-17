const showError = (form, input, errorMessageText, errorClass, inputErrorClass) => {
    const errorElement = form.querySelector(`#${input.id}-error`);
    errorElement.classList.add(errorClass);
    errorElement.textContent = errorMessageText;
    input.classList.add(inputErrorClass);
}
  
const hideError = (form, input, errorClass, inputErrorClass) => {
    const errorElement = form.querySelector(`#${input.id}-error`);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = '';
    input.classList.remove(inputErrorClass);
}
 
const checkInputValidity = (form, input, {errorClass, inputErrorClass}) => {
    if (!input.validity.valid) {
        showError(form, input, input.validationMessage, errorClass, inputErrorClass);
    } else {
        hideError(form, input, errorClass, inputErrorClass);
    }
}
  
const setEventListeners = (form, {inputSelector, submitButtonSelector, inactiveButtonClass, ...rest}) => {
    const inputList = form.querySelectorAll(inputSelector);
    const buttonElement = form.querySelector(submitButtonSelector);
    
    inputList.forEach((input) => {
      input.addEventListener('input', function () {
        checkInputValidity(form, input, rest);
        toggleButtonState(inputList, buttonElement, inactiveButtonClass);
      });
    });
}
  
const enableValidation = ({formSelector, ...rest}) => {
    const formList = document.querySelectorAll(formSelector);
    formList.forEach((form) => {
        form.addEventListener('submit', function (evt) {
        evt.preventDefault();
      });
  
    setEventListeners(form, rest);
    });
}

const hasInvalidInput = (inputList) => {
    return Array.from(inputList).some((el) => !el.validity.valid);
}

const toggleButtonState = (inputList, button, inactiveButtonClass) => {
    if (hasInvalidInput(inputList)) {
    button.classList.add(inactiveButtonClass);
    button.disabled = true;
  } else {
    button.classList.remove(inactiveButtonClass);
    button.disabled = false;
  } 
}

enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
})
