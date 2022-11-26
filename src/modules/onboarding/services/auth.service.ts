import type { LoginFormDto } from '../dtos'

export class AuthService {
  public async signIn(_loginFormDto: LoginFormDto): Promise<string> {
    return 'token_'
  }
}