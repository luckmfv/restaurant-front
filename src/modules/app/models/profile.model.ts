export class ProfileModel {
  constructor(profileModel?: ProfileModel) {
    Object.assign(this, profileModel)
  }

  id: string = '2'
  legalName: string = 'Lucas'
  socialName: string

  get name(): string {
    return this.socialName || this.legalName
  }
}