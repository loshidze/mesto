// // валидация редактирования профиля

// // const formElement = document.querySelector('.popup__form');
// // const formInput = formElement.querySelector('.popup__input');
// // const formError = formElement.querySelector(`.${formInput.id}-error`);

// enableValidation({
//   formSelector: '.popup__form',
//   inputSelector: '.popup__input',
//   submitButtonSelector: '.popup__button',
//   inactiveButtonClass: 'popup__button_disabled',
//   inputErrorClass: 'popup__input_type_error',
//   errorClass: 'popup__error_visible'
// });

// const showInputError = (formElement, inputElement, errorMessage) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.add('popup__input-error');
//   errorElement.textContent = errorMessage;
//   errorElement.classList.add('popup__input-text-error');
// };

// const hideInputError = (formElement, inputElement) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.remove('popup__input-error');
//   errorElement.classList.remove('popup__input-text-error');
//   errorElement.textContent = '';
// };

// const checkInputValidity = (formElement, inputElement) => {
//   if (!inputElement.validity.valid) {
//     showInputError(formElement, inputElement, inputElement.validationMessage);
//   } else {
//     hideInputError(formElement, inputElement);
//   }
// };

// const setEventListeners = (formElement) => {
//   const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
//   const buttonElement = formElement.querySelector('.popup__button');
//   toggleButtonState(inputList, buttonElement);
//   inputList.forEach((inputElement) => {
//     inputElement.addEventListener('input', function () {
//       checkInputValidity(formElement, inputElement);
//       toggleButtonState(inputList, buttonElement);
//     });
//   });
// };

// const enableValidation = () => {
//   const formList = Array.from(document.querySelectorAll('.popup__form'));
//   formList.forEach((formElement) => {
//     formElement.addEventListener('submit', (evt) => {
//       evt.preventDefault()
//     })
//     setEventListeners(formElement);
//   })
// }

// const hasInvalidInput = (inputList) => {
//   return inputList.some((inputElement) => {
//     return !inputElement.validity.valid;
//   });
// }

// const toggleButtonState = (inputList, buttonElement) => {
//   if (hasInvalidInput(inputList)) {
//     buttonElement.classList.add('button_inactive');
// } else {
//     buttonElement.classList.remove('button_inactive');
//   }
// }

// enableValidation()



// // валидация редактирования профиля

// const formElement = document.querySelector('.popup__form');
// const formInput = formElement.querySelector('.popup__input');
// const formError = formElement.querySelector(`.${formInput.id}-error`);



// const showInputError = (formElement, formInput, errorMessage) => {
//   const errorElement = formElement.querySelector(`.${formInput.id}-error`);
//   formInput.classList.add('popup__input-error');
//   errorElement.textContent = errorMessage;
//   errorElement.classList.add('popup__input-text-error');
// };

// const hideInputError = (formElement, formInput) => {
//   const errorElement = formElement.querySelector(`.${formInput.id}-error`);
//   formInput.classList.remove('popup__input-error');
//   errorElement.classList.remove('popup__input-text-error');
//   errorElement.textContent = '';
// };

// const checkInputValidity = (formElement, formInput) => {
//   if (!formInput.validity.valid) {
//     showInputError(formElement, formInput, formInput.validationMessage);
//   } else {
//     hideInputError(formElement, formInput);
//   }
// };

// const setEventListeners = (formElement) => {
//   const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
//   const buttonElement = formElement.querySelector('.popup__button');
//   toggleButtonState(inputList, buttonElement);
//   inputList.forEach((formInput) => {
//     formInput.addEventListener('input', function () {
//       checkInputValidity(formElement, formInput);
//       toggleButtonState(inputList, buttonElement);
//     });
//   });
// };

// const enableValidation = () => {
//   const formList = Array.from(document.querySelectorAll('.popup__form'));
//   formList.forEach((formElement) => {
//     formElement.addEventListener('submit', (evt) => {
//       evt.preventDefault()
//     })
//     setEventListeners(formElement);
//   });
// }

// const hasInvalidInput = (inputList) => {
//   return inputList.some((formInput) => {
//     return !formInput.validity.valid;
//   });
// }

// const toggleButtonState = (inputList, buttonElement) => {
//   if (hasInvalidInput(inputList)) {
//     buttonElement.setAttribute('disabled', true)
// } else {
//     buttonElement.removeAttribute('disabled')
//   }
// }

// enableValidation({
//   formSelector: '.popup__form',
//   inputSelector: '.popup__input',
//   submitButtonSelector: '.popup__button',
//   inactiveButtonClass: 'popup__button:disabled',
//   inputErrorClass: 'popup__input-text-error',
//   errorClass: 'popup__error_visible'
// });


// валидация редактирования профиля

// const formElement = document.querySelector('.popup__form');
// const formInput = formElement.querySelector('.popup__input');
// const formError = formElement.querySelector(`.${formInput.id}-error`);

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

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(optionsForValidation.inputSelector));
  const buttonElement = formElement.querySelector(optionsForValidation.submitButtonSelector);
  toggleButtonState(inputList, buttonElement);
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
    setEventListeners(formElement);
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
