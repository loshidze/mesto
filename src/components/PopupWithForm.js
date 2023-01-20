import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popupSelector, {handleSubmit}) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
    this._form = this._popup.querySelector('.popup__form');
    this._inputs = this._form.querySelectorAll('.popup__input');
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
}

export default PopupWithForm
