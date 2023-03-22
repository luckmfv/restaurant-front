export class LoginFormDto {
  login: string
  password: string

  static blankForm() {
    const loginFormDto = new LoginFormDto()

    loginFormDto.login = ''
    loginFormDto.password = ''

    return loginFormDto
  }
}

export class LoginResponseDto {
  authorization: string
}
