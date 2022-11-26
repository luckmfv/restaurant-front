<template>
  <BasePage title="Login">
    <BaseContent class="justify-center items-center min-h-screen">
      <BasePanel spacing="lg">
        <BaseField label="Login">
          <BaseTextField
            placeholder="Digie seu usuário"
            v-model="form.username"
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
import { authService } from '@/modules/onboarding/services'
import { helpers, required } from '@vuelidate/validators'
import { LoginFormDto } from '@/modules/onboarding/dtos'
import { defineComponent, ref, computed } from 'vue'
import useVuelidate from '@vuelidate/core'
import router from '@/router'

export default defineComponent({
  name: 'page-login',
  setup() {
    const { setAuthToken } = useAuthStorage()
    const form = ref<LoginFormDto>(LoginFormDto.blankForm())

    const rules = computed(() => ({
      username: {
        required: helpers.withMessage('Campo obrigatório', required)
      },
      password: {
        required: helpers.withMessage('Campo obrigatório', required)
      }
    }))

    const v$ = useVuelidate(rules, form, { $registerAs: 'Login.page' })

    const onLogin = async(): Promise<void> => {
      v$.value.$touch()

      if (v$.value.$error) {
        return
      }

      const authToken = await authService.signIn(form.value)
      setAuthToken(authToken)
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