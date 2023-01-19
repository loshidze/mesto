import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor({selector, handleSubmit}) {
    super({selector});
    this._handleSubmit = handleSubmit
  }

  _getInputValues() {
    this._inputs = this._selector.querySelectorAll('.popup__input');
    this._forms = {};
    this._inputs.forEach(input => {
      this._forms[input.name] = input.value;
    })
    return this._forms;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form = this._selector.querySelector('.popup__form');
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
