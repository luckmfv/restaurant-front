import type { CreateAccountFormDto, LoginFormDto, LoginResponseDto } from '@/modules/auth/dtos'
import { ApiService } from '@/modules/app/services/api.service'
import type { ProfileModel } from '@/modules/app/models'
import { authorizationInterceptor } from '@/modules/app/interceptors'

class AuthService extends ApiService {
  public async signIn(loginFormDto: LoginFormDto): Promise<string> {
    const response = await this.httpClient.post<LoginResponseDto>('sign-in', loginFormDto)

    return response.data.authorization
  }

  public async createAccount(createAccountFormDto: CreateAccountFormDto): Promise<void> {
    const response = await this.httpClient.post('sign-up', createAccountFormDto)

    return response.data
  }

  public async me(): Promise<ProfileModel> {
    const response = await this.httpClient.get<ProfileModel>('me')

    return response.data
  }
}

export const authService = new AuthService({ prefix: '/account/', interceptors: [authorizationInterceptor] })
