class UserInfo {
    constructor({ profileName, profileJob }) {
        this._nameInput = profileName;
        this._jobInput = profileJob;
    }

    getUserInfo() {
        const userInfo = {
            name: this._nameInput.textContent,
            job: this._jobInput.textContent,
        }
        return userInfo;
    }

    setUserInfo(profileName, profileJob) {
        this._nameInput.textContent = newProfileName;
        this._jobInput.textContent = newProfileJob;
    }
}

export default UserInfo;