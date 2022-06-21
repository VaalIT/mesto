class UserInfo {
    constructor({ nameSelector, aboutSelector, avatarSelector }) {
        this._name = document.querySelector(nameSelector);
        this._about = document.querySelector(aboutSelector);
        this._avatar = document.querySelector(avatarSelector);
    }

    getUserInfo() {
        const userData = {
            name: this._name.textContent,
            about: this._about.textContent,
        }
        return userData;
    }

    setUserInfo(data) {
        this._name.textContent = data.name;
        this._about.textContent = data.about;
    }

    setUserAvatar(link) {
        this._avatar.style.backgroundImage = `url(${link})`;
    }
}

export default UserInfo;