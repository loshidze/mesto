class UserInfo {
  constructor(nameProfile, jobPfofile, avatar) {
    this._nameProfile = nameProfile;
    this._jobPfofile = jobPfofile;
    this._avatar = avatar;
  }

  getUserInfo() {
    const infoProfile = {
      contentname: this._nameProfile.textContent,
      occupation: this._jobPfofile.textContent
    }
    return infoProfile;
  }

  setUserInfo(infoProfile) {
    this._nameProfile.textContent = infoProfile.name;
    this._jobPfofile.textContent = infoProfile.about;
    this._avatar.src = infoProfile.avatar;
  }
}

export default UserInfo
