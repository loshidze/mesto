const optionsForValidation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inputErrorClass: '.popup__input-text-error',
  errorClass: '.popup__input-error'
};

const showInputError = (formElement, formInput, errorMessage) => {
  const errorElement = formElement.querySelector(`.${formInput.id}-error`);
  formInput.classList.add(optionsForValidation.errorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(optionsForValidation.inputErrorClass);
};

const hideInputError = (formElement, formInput) => {
  const errorElement = formElement.querySelector(`.${formInput.id}-error`);
  formInput.classList.remove(optionsForValidation.errorClass);
  errorElement.classList.remove(optionsForValidation.inputErrorClass);
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, formInput) => {
  if (!formInput.validity.valid) {
    showInputError(formElement, formInput, formInput.validationMessage);
  } else {
    hideInputError(formElement, formInput);
  }
};

const setEventListeners = (formElement, optionsForValidation) => {
  const inputList = Array.from(formElement.querySelectorAll(optionsForValidation.inputSelector));
  const buttonElement = formElement.querySelector(optionsForValidation.submitButtonSelector);
  toggleButtonState(inputList, buttonElement);
  formElement.addEventListener('reset', () => {
    setTimeout(() => {
       toggleButtonState(inputList, buttonElement);
    }, 0);
  });
  inputList.forEach((formInput) => {
    formInput.addEventListener('input', function () {
      checkInputValidity(formElement, formInput);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = (optionsForValidation) => {
  const formList = Array.from(document.querySelectorAll(optionsForValidation.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault()
    })
    setEventListeners(formElement, optionsForValidation);
  });
}

const hasInvalidInput = (inputList) => {
  return inputList.some((formInput) => {
    return !formInput.validity.valid;
  });
}

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.setAttribute('disabled', true)
} else {
    buttonElement.removeAttribute('disabled')
  }
}

enableValidation(optionsForValidation);
