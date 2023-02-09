import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popupSelector, {handleSubmit}) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
    this._form = this._popup.querySelector('.popup__form');
    this._inputs = this._form.querySelectorAll('.popup__input');
    this._button = this._form.querySelector('.popup__button');
    this._default = this._button.textContent;
  }

  _getInputValues() {
    this._inputValues = {};
    this._inputs.forEach(input => {
      this._inputValues[input.name] = input.value;
    })
    return this._inputValues;
  }

  setInputValues(data) {
    this._inputs.forEach((input) => {
      input.value = data[input.name];
    });
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleSubmit(this._getInputValues());
    })
  }

  close() {
    super.close();
    this._form.reset();
  }

  loading(isLoading) {
    if(isLoading) {
      this._button.textContent = 'Сохранение...'
    } else {
      this._button.textContent = this._default
    }
  }
}

export default PopupWithForm
