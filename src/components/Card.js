class Card {
  constructor(data, templateSelector, handleCardClick, myId, likeCard, dislikeCard, deleteCard) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this.id = data._id;
    this._data = data;
    this._ownerId = data.owner._id;
    this._myId = myId;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._likeCard = likeCard;
    this._dislikeCard = dislikeCard;
    this._deleteCard = deleteCard;
  }


  _getTemplateCard() {
    this._card = document.querySelector(this._templateSelector).content.querySelector('.gallery__item').cloneNode(true);

    return this._card;
  }

  _handleDeleteCard() {
    this._newCard.remove();
    this._newCard = null;
  }

  _hideDeleteButton() {
    if(this._ownerId !== this._myId) {
      this._deleteCardButton.remove();
      this._deleteCardButton = null;
    }
  }

  handleLikeCard() {
    this._likeButton.classList.toggle('gallery__button-like_active');
  }

  counterLikes(data) {
    this._likesQuantity.textContent = data.likes.length;
  }

  _setEventListeners() {
    this._deleteCardButton = this._newCard.querySelector('.gallery__button-delete');
    this._deleteCardButton.addEventListener('click', () => { this._deleteCard(this._data, this._handleDeleteCard.bind(this)) });

    this._likeButton = this._newCard.querySelector('.gallery__button-like');
    this._likeButton.addEventListener('click', () => {
      if(this._likeButton.classList.contains('gallery__button-like_active')) {
        this._dislikeCard(this)
      } else {
        this._likeCard(this)
      }
    });

    this._cardImage = this._newCard.querySelector('.gallery__image');
    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link)
    });
  }

  _setData() {
    this._title = this._newCard.querySelector('.gallery__item-title');
    this._title.textContent = this._name;

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._likesQuantity = this._newCard.querySelector('.gallery__likes-quantity');
    this._likes.some((item) => item._id === this._myId)
      ? this._likeButton.classList.add('gallery__button-like_active')
      : null;
    this._likesQuantity.textContent = this._likes.length;
    this._hideDeleteButton();
  }

  getView() {
    this._newCard = this._getTemplateCard();
    this._setEventListeners();
    this._setData();

    return this._newCard;
  }
}

export default Card;
