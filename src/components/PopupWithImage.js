import Popup from "./Popup.js";

class PopupWithImage extends Popup {
  constructor({selector}) {
    super({selector});
    this._popupImagePicture = this._selector.querySelector('.popup__open-image');
    this._popupImageTitle = this._selector.querySelector('.popup__image-title');
  }

  open(name, link) {
    this._popupImagePicture.src = link;
    this._popupImageTitle.textContent = name;
    this._popupImagePicture.alt = name;

    super.open()
  }
}

export default PopupWithImage
