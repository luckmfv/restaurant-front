export class CreateAccountContactsFormDto {
  phone: string
  email: string

  static blankForm(): CreateAccountContactsFormDto {
    const createAccountContactsFormDto = new CreateAccountContactsFormDto()

    createAccountContactsFormDto.phone = ''
    createAccountContactsFormDto.email = ''

    return createAccountContactsFormDto
  }
}

export class CreateAccountFormDto {
  documentNumber: string
  legalName: string
  socialName: string
  contacts: CreateAccountContactsFormDto
  password: string

  static blankForm(): CreateAccountFormDto {
    const createAccountFormDto = new CreateAccountFormDto()

    createAccountFormDto.legalName = ''
    createAccountFormDto.socialName = ''
    createAccountFormDto.documentNumber = ''
    createAccountFormDto.contacts = CreateAccountContactsFormDto.blankForm()
    createAccountFormDto.password = ''

    return createAccountFormDto
  }
}
