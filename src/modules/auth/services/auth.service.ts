import type { CreateAccountFormDto, LoginFormDto } from '@/modules/auth/dtos'

class AuthService {
  public async signIn(_loginFormDto: LoginFormDto): Promise<string> {
    return 'token_'
  }

  public async createAccount(_createAccountFormDto: CreateAccountFormDto): Promise<void> {}

  public async me(): Promise<void> {}
}

export const authService = new AuthService()