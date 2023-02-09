import Popup from "./Popup.js";

class PopupWithConfirmation extends Popup {
  constructor(popupSelector, deleteCardApi) {
    super(popupSelector);
    this._deleteCardApi = deleteCardApi;
    this._form = this._popup.querySelector('.popup__form');
  }

  setData(data, deleteCard) {
    this._data = data;
    this._deleteCard = deleteCard;
  }

  getData() {
    return {data: this._data, deleteCard: this._deleteCard};
  }

  setEventListeners() {
    super.setEventListeners()
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._deleteCardApi();
    });
  }
}

export default PopupWithConfirmation
