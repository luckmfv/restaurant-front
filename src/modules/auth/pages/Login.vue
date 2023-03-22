<template>
  <BasePage title="Login">
    <BaseContent class="justify-center items-center min-h-screen">
      <BasePanel spacing="lg">
        <BaseField label="Login">
          <BaseTextField
            placeholder="Digie seu usuário"
            v-model="form.login"
            :vuelidateField="v$.username"
          />
        </BaseField>

        <BaseField class="mt-4" label="Senha">
          <BaseTextField
            placeholder="Digie sua senha"
            type="password"
            v-model="form.password"
            :vuelidateField="v$.password"
          />
        </BaseField>

        <BaseButton class="mt-5" @click="onLogin()">
          Entrar
        </BaseButton>

        <BaseButton
          class="mt-5"
          @click="onRegister()"
          type="secondary"
        >
          Cadastrar-se
        </BaseButton>
      </BasePanel>
    </BaseContent>
  </BasePage>
</template>

<script lang="ts">
import { useAuthStorage } from '@/modules/app/compositions'
import { applicationService } from '@/modules/app/services'
import { helpers, required } from '@vuelidate/validators'
import { authService } from '@/modules/auth/services'
import { defineComponent, ref, computed } from 'vue'
import { LoginFormDto } from '@/modules/auth/dtos'
import useVuelidate from '@vuelidate/core'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'page-login',
  setup() {
    const router = useRouter()
    const { setAuthToken } = useAuthStorage()
    const form = ref<LoginFormDto>(LoginFormDto.blankForm())

    const rules = computed(() => ({
      login: {
        required: helpers.withMessage('Campo obrigatório', required)
      },
      password: {
        required: helpers.withMessage('Campo obrigatório', required)
      }
    }))

    const v$ = useVuelidate(rules, form, { $registerAs: 'Login.page' })

    const goToHome = (): void => {
      router.push({ name: 'home.home' })
    }

    const onLogin = async(): Promise<void> => {
      v$.value.$touch()

      if (v$.value.$error) {
        return
      }

      try {
        const authToken = await authService.signIn(form.value)
        setAuthToken(authToken)
        await applicationService.setProfile()
        goToHome()
      } catch(error) {
        console.log(error)
      }
    }

    const onRegister = (): void => {
      router.push({  name: 'auth.createAccount' })
    }

    return {
      onLogin,
      onRegister,
      form,
      v$
    }
  }
})
</script>
