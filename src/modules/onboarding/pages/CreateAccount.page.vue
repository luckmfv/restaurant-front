<template>
  <BasePage title="Criar Conta">
    <BaseContent class="justify-center items-center min-h-screen">
      <BasePanel class="min-w-[440px]">
        <div class="w-full text-center">
          <p class="text-title">Criar Conta</p>
        </div>

        <BaseField label="Usuário" class="mt-10">
          <BaseTextField
            v-model="createAccountForm.username"
            :vuelidateField="v$.username"
            placeholder="Usuário"
          />
        </BaseField>

        <BaseField class="mt-4" label="Senha">
          <BaseTextField
            type="password"
            v-model="createAccountForm.password"
            :vuelidateField="v$.password"
            placeholder="Senha"
          />
        </BaseField>

        <div class="flex mt-4 w-full">
          <BaseButton
            class="mr-4"
            type="secondary"
            @click="goToLogin()"
          >
            Voltar
          </BaseButton>

          <BaseButton @click="onRegister()">
            Cadastrar-se
          </BaseButton>
        </div>
      </BasePanel>
    </BaseContent>
  </BasePage>
</template>

<script lang="ts">
import router from '@/router'
import { defineComponent, computed, ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, helpers, minLength } from '@vuelidate/validators'
import { CreateAccountFormDto } from '@/modules/onboarding/dtos'

export default defineComponent({
  name: 'CreateAccount.page',
  setup() {
    const createAccountForm = ref(CreateAccountFormDto.blankForm())
    const rules = computed(() => ({
      username: {
        required: helpers.withMessage('Campo obrigatório', required),
        minLength: helpers.withMessage('O campo deve possuir ao menos 6 caracteres', minLength(6))
      },
      password: {
        required: helpers.withMessage('Campo obrigatório', required),
        minLength: helpers.withMessage('O campo deve possuir ao menos 6 caracteres', minLength(6))
      }
    }))

    const v$ = useVuelidate(rules, createAccountForm, { $registerAs: 'CreateAccountPage' })

    const goToLogin = (): void => {
      router.push({ name: 'auth.login' })
    }

    const onRegister = (): void => {
      v$.value.$touch()

      if (v$.value.$error) {
        return
      }

      goToLogin()
    }

    return {
      onRegister,
      goToLogin,
      createAccountForm,
      v$
    }
  }
})
</script>
<style>

</style>