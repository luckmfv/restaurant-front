<template>
  <BasePage title="Criar Conta">
    <BaseContent class="justify-center items-center min-h-screen">
      <BasePanel class="min-w-[440px]">
        <div class="w-full text-center">
          <p class="text-title">Criar Conta</p>
        </div>

        <CreateAccountForm
          @register="onRegister($event)"
          @back-to-login="goToLogin()"
        />
      </BasePanel>
    </BaseContent>
  </BasePage>
</template>

<script lang="ts">
import { CreateAccountForm } from '@/modules/auth/components'
import type { CreateAccountFormDto } from '@/modules/auth/dtos'
import { authService } from '@/modules/auth/services'
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'CreateAccount.page',
  components: { CreateAccountForm },
  setup() {
    const router = useRouter()

    const goToLogin = (): void => {
      router.push({ name: 'auth.login' })
    }

    const onRegister = async(createAccountFormDto: CreateAccountFormDto): Promise<void> => {
      await authService.createAccount(createAccountFormDto)
      goToLogin()
    }

    return {
      onRegister,
      goToLogin
    }
  }
})
</script>
