class FormValidator {
  constructor(settings, formElement) {
    this._settings = settings;
    this._formElement = formElement;
  }

  _showInputError(formInput) {
    this._errorElement = this._formElement.querySelector(`.${formInput.id}-error`);
    formInput.classList.add(this._settings.errorClass);
    this._errorElement.textContent = formInput.validationMessage;
    this._errorElement.classList.add(this._settings.inputErrorClass);
  }

  _hideInputError(formInput) {
    this._errorElement = this._formElement.querySelector(`.${formInput.id}-error`);
    formInput.classList.remove(this._settings.errorClass);
    this._errorElement.classList.remove(this._settings.inputErrorClass);
    this._errorElement.textContent = '';
  }

  _checkInputValidity(formInput) {
    if (!formInput.validity.valid) {
      this._showInputError(formInput);
    } else {
      this._hideInputError(formInput);
    }
  }

  _hasInvalidInput() {
    return this._inputList.some((formInput) => {
      return !formInput.validity.valid;
    });
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.setAttribute('disabled', true)
    } else {
      this._buttonElement.removeAttribute('disabled')
    }
  }

  _setEventListeners() {
    this._inputList = Array.from(this._formElement.querySelectorAll(this._settings.inputSelector));
    this._buttonElement = this._formElement.querySelector(this._settings.submitButtonSelector);
    this._toggleButtonState();
    this._formElement.addEventListener('reset', () => {
      setTimeout(() => {
         this._toggleButtonState();
      }, 0);
    });
    this._inputList.forEach((formInput) => {
      formInput.addEventListener('input', () => {
        this._checkInputValidity(formInput);
        this._toggleButtonState();
      });
    });
  }

  enableValidation() {
    this._setEventListeners();
  }
}

export default FormValidator;
