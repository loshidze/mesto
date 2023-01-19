class UserInfo {
  constructor(nameProfile, jobPfofile) {
    this._nameProfile = nameProfile;
    this._jobPfofile = jobPfofile;
  }

  getUserInfo() {
    const infoProfile = {
      name: this._nameProfile.textContent,
      job: this._jobPfofile.textContent
    }
    return infoProfile;
  }

  setUserInfo(infoProfile) {
    this._nameProfile.textContent = infoProfile.name;
    this._jobPfofile.textContent = infoProfile.job;
  }
}

export default UserInfo
