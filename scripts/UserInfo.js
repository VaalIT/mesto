class UserInfo {
    constructor({ profileNameSelector, profileJobSelector }) {
        this._nameInput = document.querySelector(profileNameSelector);
        this._jobInput = document.querySelector(profileJobSelector);
    }

    getUserInfo() {
        return {
            name: this._nameInput.textContent,
            about: this._jobInput.textContent,
        }
    }

    setUserInfo(name, job) {
        this._nameInput.textContent = name;
        this._jobInput.textContent = job;
    }
}

export default UserInfo;