class Api {
    constructor({baseUrl, headers}) {
      this._baseUrl = baseUrl;
      this._headers = headers
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
          }

        return Promise.reject(`Ошибка: ${res.status}`);
    }

    setUserInfo() {
      return fetch(this._baseUrl + `/users/me`, {
        headers: this._headers
      })
      .then(this._checkResponse)
    }

    getInitialCards() {
      // ...
    }
  
    // другие методы работы с API
  }
  
  export default Api;