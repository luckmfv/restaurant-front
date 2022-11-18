export class LoginFormDto {
  username: string
  password: string

  static blankForm() {
    const loginFormDto = new LoginFormDto()

    loginFormDto.username = ''
    loginFormDto.password = ''

    return loginFormDto
  }
}