import { ProfileModel } from '@/modules/app/models'
import type { CreateAccountFormDto, LoginFormDto } from '@/modules/auth/dtos'

class AuthService {
  public async signIn(_loginFormDto: LoginFormDto): Promise<string> {
    return 'token_'
  }

  public async createAccount(_createAccountFormDto: CreateAccountFormDto): Promise<void> {}

  public async me(): Promise<ProfileModel> {
    return new ProfileModel()
  }
}

export const authService = new AuthService()