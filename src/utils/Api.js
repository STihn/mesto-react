
class Api {
    constructor({baseUrl, headers}) {
      this.baseUrl = baseUrl;
      this.headers = headers
    }
    
    getInitialCards() {
      return fetch(`${this.baseUrl}/cards`,{
        method: 'GET',
        headers:  this.headers
      }).then(this._status)
      .catch(error => console.log(error.message));
    }

    likeCard(cardId){
      return fetch(`${this.baseUrl}/cards/likes/${cardId}`,{
        method: 'PUT',
        headers:  this.headers
      }).then(this._status)
      .catch(error => console.log(error.message));
    }

    noLikeCard(cardId) {
      return fetch(`${this.baseUrl}/cards/likes/${cardId}`,{
        method: 'DELETE',
        headers:  this.headers
      }).then(this._status)
      .catch(error => console.log(error.message));
    }

    deleteCard(cardId) {
      return fetch(`${this.baseUrl}/cards/${cardId}`,{
        method: 'DELETE',
        headers:  this.headers
      }).then(this._status)
      .catch(error => console.log(error.message));
    }

    createCard(data) {
      return fetch(`${this.baseUrl}/cards`, {
        method: 'POST',
        headers:  this.headers,
        body: JSON.stringify({
          name: data.name,
          link: data.link
        })
      }).then(this._status)
      .catch(error => console.log(error.message));
    }

    editProfile(data) {
      return fetch(`${this.baseUrl}/users/me`, {
        method: 'PATCH',
        headers:  this.headers,
        body: JSON.stringify({
            name: data.name,
            about: data.about
        })
      }).then(this._status)
        .catch(error => console.log(error.message));
    }

    editAvatar(data) {
      return fetch(`${this.baseUrl}/users/me/avatar`, {
        method: 'PATCH',
        headers:  this.headers,
        body: JSON.stringify({
            avatar: data.avatar
        })
      })
    }

    getUserProfile() {
      return fetch(`${this.baseUrl}/users/me`,{
        method: 'GET',
        headers:  this.headers
      }).then(this._status)
      .catch(error => console.log(error.message));
    }

    _status(res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error - ${res.status}`);
    }
}

const api = new Api ({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-14',
  headers: {
      authorization: '6e586ab2-f36c-4d4a-abc3-ac2332162dcd',
      'content-type': 'application/json'
  }
});

export default api;