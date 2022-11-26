import type { CreateAccountFormDto, LoginFormDto } from '../dtos'

class AuthService {
  public async signIn(_loginFormDto: LoginFormDto): Promise<string> {
    return 'token_'
  }

  public async createAccount(_createAccountFormDto: CreateAccountFormDto): Promise<void> {}
}

export const authService = new AuthService()