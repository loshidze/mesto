class Popup {
  constructor({selector}) {
    this._selector = selector;
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._selector.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._selector.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close()
    }
  }

  setEventListeners() {
    document.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
        this.close()
      }
      if (evt.target.classList.contains('popup__close')) {
        this.close()
      }
    })
  }
}

export default Popup
