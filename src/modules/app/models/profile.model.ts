export class ProfileContactModel {
  phone: string = '41987308948'
  email: string = 'lucas@medprevonline.com'

  static fromRequest(params: ProfileContactModel): ProfileContactModel {
    const profileContactModel = new ProfileContactModel()

    profileContactModel.email = params.email
    profileContactModel.phone = params.phone

    return profileContactModel
  }
}

export class ProfileModel {
  id: string = '2'
  documentNumber: string = '07190909974'
  legalName: string = 'Lucas Vinotti'
  socialName: string = 'Vinotti Lucas'
  contacts: ProfileContactModel = new ProfileContactModel()

  get name(): string {
    return this.socialName || this.legalName
  }

  static fromRequest(params: ProfileModel): ProfileModel {
    const profileModel = new ProfileModel()

    profileModel.id = params.id
    profileModel.legalName = params.legalName
    profileModel.socialName = params.socialName
    profileModel.documentNumber = params.documentNumber

    if (params.contacts) {
      profileModel.contacts = ProfileContactModel.fromRequest(params.contacts)
    }

    return profileModel
  }
}
