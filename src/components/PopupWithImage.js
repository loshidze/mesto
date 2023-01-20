import Popup from "./Popup.js";

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImagePicture = this._popup.querySelector('.popup__open-image');
    this._popupImageTitle = this._popup.querySelector('.popup__image-title');
  }

  open(name, link) {
    this._popupImagePicture.src = link;
    this._popupImageTitle.textContent = name;
    this._popupImagePicture.alt = name;

    super.open()
  }
}

export default PopupWithImage
