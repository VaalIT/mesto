class UserInfo {
    constructor({ profileNameSelector, profileJobSelector }) {
        this._nameInput = profileNameSelector;
        this._jobInput = profileJobSelector;
    }

    getUserInfo() {
        const userInfo = {
            name: this._nameInput.textContent,
            job: this._jobInput.textContent,
        }
        return userInfo;
    }

    setUserInfo(profileName, profileJob) {
        this._nameInput.textContent = profileName;
        this._jobInput.textContent = profileJob;
    }
}

export default UserInfo;