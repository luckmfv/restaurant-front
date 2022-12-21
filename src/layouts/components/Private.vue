<template>
  <div id="private-layout">
    <div v-if="!shouldRenderApplication">
      loading
    </div>
    <div
      v-else
      class="block h-full"
    >
      <BaseSidebar />
      <div class="block relative left-24 w-[calc(100%-96px)] h-full">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { applicationService } from '@/modules/app/services'
import { useProfile, useLoading } from '@/modules/app/compositions'
import { computed, defineComponent, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'layout-private',
  setup() {
    const router = useRouter()
    const [applicationIsLoading, startApplicationLoading, stopApplicationLoading] = useLoading()
    const { hasProfile, profile } = useProfile()

    const shouldRenderApplication = computed(() => {
      return !applicationIsLoading.value
    })

    onBeforeMount(async() => {
      if (!hasProfile.value) {
        startApplicationLoading()
        const profileWasSet = await applicationService.setProfile()

        if (!profileWasSet) {
          router.push({ name: 'auth.login' })
        }

        stopApplicationLoading()
      }
    })

    return {
      shouldRenderApplication,
      profile
    }
  }
})
</script>
