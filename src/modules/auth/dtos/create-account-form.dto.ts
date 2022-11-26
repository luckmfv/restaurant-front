export class CreateAccountFormDto {
  username: string
  password: string

  static blankForm(): CreateAccountFormDto {
    const createAccountFormDto = new CreateAccountFormDto()

    createAccountFormDto.username = ''
    createAccountFormDto.password = ''

    return createAccountFormDto
  }
}