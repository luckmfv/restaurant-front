<template>
  <div class="">
    <BaseField
      label="Login"
    >
      <BaseTextField
        v-model="form.username"
        placeholder="Digie seu cpf"
      />
    </BaseField>
    <BaseField
      class="mt-4"
      label="Senha"
    >
      <BaseTextField
        v-model="form.password"
        placeholder="Digie sua senha"
        type="password"
      />
    </BaseField>

    <BaseButton
      :disabled="disabledButton"
      class="mt-4"
      @click="onLogin()"
    >
      Entrar
    </BaseButton>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { LoginFormDto } from '@/modules/onboarding/dtos'

export default defineComponent({
  name: 'page-login',
  setup() {
    const form = ref<LoginFormDto>(LoginFormDto.blankForm())
    const disabledButton = ref(false)
    const onLogin = (): void => {
      disabledButton.value = true
      setTimeout(() => {
        disabledButton.value = false
      }, 10000)

      console.log(form.value)
    }



    return {
      onLogin,
      disabledButton,
      form
    }
  }
})
</script>