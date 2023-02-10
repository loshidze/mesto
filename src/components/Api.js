class Api {
  constructor({url, headers}) {
    this._url = url;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getProfileInfo() {
    return fetch(`${this._url}/users/me`, {
        headers: this._headers
    })
    .then(this._checkResponse);
  }

  setProfileInfo(data) {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers,
      method: 'PATCH',
      body: JSON.stringify({
        name: data.contentname,
        about: data.occupation
      })
  })
    .then(this._checkResponse);
  }

  getCards() {
    return fetch(`${this._url}/cards`, {
      headers: this._headers
    })
    .then(this._checkResponse);
  }

  setCard(data) {
    return fetch(`${this._url}/cards`, {
      headers: this._headers,
      method: 'POST',
      body: JSON.stringify({
        name: data.cardname,
        link: data.link
      })
  })
    .then(this._checkResponse);
  }

  changeAvatar(data) {
    return fetch(`${this._url}/users/me/avatar`, {
      headers: this._headers,
      method: 'PATCH',
      body: JSON.stringify({
        avatar: data.avatarlink
      })
  })
    .then(this._checkResponse);
  }

  like(id) {
    return fetch(`${this._url}/cards/${id}/likes`, {
      headers: this._headers,
      method: 'PUT'
  })
    .then(this._checkResponse);
  }

  dislike(id) {
    return fetch(`${this._url}/cards/${id}/likes`, {
      headers: this._headers,
      method: 'DELETE'
  })
    .then(this._checkResponse);
  }

  deleteCard(id) {
    return fetch(`${this._url}/cards/${id}`, {
      headers: this._headers,
      method: 'DELETE'
  })
    .then(this._checkResponse);
  }
}

export default Api
