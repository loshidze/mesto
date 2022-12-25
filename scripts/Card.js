import {openPopup, popupImage, popupImagePicture, popupImageTitle} from "./index.js"

class Card {
  constructor({name, link}) {
    this._name = name;
    this._link = link;
  }


  _getTemplateCard() {
    const card = document.querySelector('#new-card').content.querySelector('.gallery__item').cloneNode(true);

    return card;
  }

  _handleDeleteCard() {
    this._newCard.remove();
    this._newCard = null;
  }

  _handleLikeCard() {
    this._newCard.querySelector('.gallery__button-like').classList.toggle('gallery__button-like_active');
  }

  _fillPopupImageData() {
    popupImagePicture.src = this._link;
    popupImageTitle.textContent = this._name;
    popupImagePicture.alt = this._name;
  }

  _setEventListeners() {
    const deleteCard = this._newCard.querySelector('.gallery__button-delete');
    deleteCard.addEventListener('click', () => { this._handleDeleteCard() });

    const likeCard = this._newCard.querySelector('.gallery__button-like');
    likeCard.addEventListener('click', () => { this._handleLikeCard() });

    const cardImage = this._newCard.querySelector('.gallery__image');
    cardImage.addEventListener('click', () => {
      openPopup(popupImage);
      this._fillPopupImageData()
    });
  }

  _setData() {
    const name = this._newCard.querySelector('.gallery__item-title');
    name.textContent = this._name;

    const link = this._newCard.querySelector('.gallery__image');
    link.src = this._link;
    link.alt = this._name;
  }

  getView() {
    this._newCard = this._getTemplateCard();
    this._setEventListeners();
    this._setData();

    return this._newCard;
  }
}

export default Card;
