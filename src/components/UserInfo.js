class UserInfo {
  constructor(nameProfile, jobPfofile) {
    this._nameProfile = nameProfile;
    this._jobPfofile = jobPfofile;
  }

  getUserInfo() {
    const infoProfile = {
      contentname: this._nameProfile.textContent,
      occupation: this._jobPfofile.textContent
    }
    return infoProfile;
  }

  setUserInfo(infoProfile) {
    this._nameProfile.textContent = infoProfile.contentname;
    this._jobPfofile.textContent = infoProfile.occupation;
  }
}

export default UserInfo
