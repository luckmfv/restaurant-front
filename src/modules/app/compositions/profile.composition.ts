import type { ProfileModel } from '@/modules/app/models'
import { computed, ref } from 'vue'

const profile = ref<ProfileModel>()
const hasProfile = computed(() => Boolean(profile.value?.id))

export const useProfile = () => {
  const setProfile = (newProfile: ProfileModel): void => {
    profile.value = newProfile
  }

  return {
    setProfile,
    hasProfile,
    profile
  }
}