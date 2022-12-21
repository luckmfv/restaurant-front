import { useAuthStorage, useProfile } from '@/modules/app/compositions'
import { authService } from '@/modules/auth/services'

const { removeAuthToken, verifyIfHasAuthToken } = useAuthStorage()
const { setProfile } = useProfile()

class ApplicationSercice {
  public async setProfile(): Promise<boolean> {
    if (!verifyIfHasAuthToken()) {
      return false
    }

    try {
      const profile = await authService.me()
      setProfile(profile)

      return true
    } catch {
      removeAuthToken()

      return false
    }
  }
}

export const applicationService = new ApplicationSercice()
