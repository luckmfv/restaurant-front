import { useAuthStorage } from '@/modules/app/compositions'
import { authService } from '@/modules/auth/services'
import { useRouter } from 'vue-router'

const router = useRouter()
const { removeAuthToken } = useAuthStorage()

class ApplicationSercice {
  public async setUser(): Promise<void> {
    try {
      await authService.me()
    } catch {
      removeAuthToken()
      router.push({ name: 'auth.login' })
    }
  }
}

export const applicationService = new ApplicationSercice()