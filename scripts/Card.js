class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }


  _getTemplateCard() {
    this._card = document.querySelector(this._templateSelector).content.querySelector('.gallery__item').cloneNode(true);

    return this._card;
  }

  _handleDeleteCard() {
    this._newCard.remove();
    this._newCard = null;
  }

  _handleLikeCard() {
    this._likeButton.classList.toggle('gallery__button-like_active');
  }

  _setEventListeners() {
    const deleteCard = this._newCard.querySelector('.gallery__button-delete');
    deleteCard.addEventListener('click', () => { this._handleDeleteCard() });

    this._likeButton = this._newCard.querySelector('.gallery__button-like');
    this._likeButton.addEventListener('click', () => { this._handleLikeCard() });

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
  }

  getView() {
    this._newCard = this._getTemplateCard();
    this._setEventListeners();
    this._setData();

    return this._newCard;
  }
}

export default Card;
