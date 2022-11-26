import type { LoginFormDto } from '../dtos'

class AuthService {
  public async signIn(_loginFormDto: LoginFormDto): Promise<string> {
    return 'token_'
  }
}

export const authService = new AuthService()