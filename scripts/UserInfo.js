class UserInfo {
    constructor({ profileNameSelector, profileJobSelector }) {
        this._profileNameSelector = profileNameSelector;
        this._profileJobSelector = profileJobSelector;
    }

    getUserInfo() {
        const userData = {
            name: this._profileNameSelector.textContent,
            job: this._profileJobSelector.textContent,
        }
        return userData;
    }

    setUserInfo(data) {
        this._profileNameSelector.textContent = data.profileName;
        this._profileJobSelector.textContent = data.profileJob;
    }
}

export default UserInfo;