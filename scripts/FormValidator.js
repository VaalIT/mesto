class FormValidator {
  constructor(enableValidation, formItem) {
    this._inputSelector = enableValidation.inputSelector;
    this._submitButtonSelector = enableValidation.submitButtonSelector;
    this._inactiveButtonClass = enableValidation.inactiveButtonClass;
    this._inputErrorClass = enableValidation.inputErrorClass;
    this._errorClass = enableValidation.errorClass;

    this._formItem = formItem;

    this._inputList =  Array.from(this._formItem.querySelectorAll(this._inputSelector));
    this._buttonItem = this._formItem.querySelector(this._submitButtonSelector);
  }

  _showError = (input, errorMessageText) => {
    const _errorElement = this._formItem.querySelector(`#${input.id}-error`);
    _errorElement.classList.add(this._errorClass);
    _errorElement.textContent = errorMessageText;
    input.classList.add(this._inputErrorClass);
  }

  _hideError = (input) => {
    const _errorElement = this._formItem.querySelector(`#${input.id}-error`);
    _errorElement.classList.remove(this._errorClass);
    _errorElement.textContent = '';
    input.classList.remove(this._inputErrorClass);
  }

  _checkInputValidity = () => {
    if (!input.validity.valid) {
      this._showError(input, input.validationMessage);
    } else {
      this._hideError(input);
    }
  }

  _setEventListeners = () => {
    this.toggleButtonState();

    this._inputList.forEach((input) => {
      input.value ? this._checkInputValidity(input) : '';
      input.addEventListener('input', function () {
        this._checkInputValidity(input);
        this.toggleButtonState();
      });
    });
  }

  enableValidation = () => {
    this._formItem.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    
    this._setEventListeners();
  }

  _hasInvalidInput = () => {
    return this._inputList.some((input) => !input.validity.valid);
  }

  toggleButtonState = () => {
    if (this._hasInvalidInput(this._inputList)) {
      this._button.classList.add(this._inactiveButtonClass);
      this._button.disabled = true;
    } else {
      this._button.classList.remove(this._inactiveButtonClass);
      this._button.disabled = false;
    } 
  }
}

export default FormValidator;

