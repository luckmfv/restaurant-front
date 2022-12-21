<template>
  <div>
    <BaseForm @submit="onSubmit()">
      <BaseField label="Nome legal" class="mt-10">
        <BaseTextField
          v-model="localCreateAccountForm.legalName"
          :vuelidateField="v$.legalName"
          placeholder="Digite seu nome legal"
        />
      </BaseField>

      <BaseCheckbox
        class="mt-4"
        v-model="shouldShowSocialName"
        label="Desejo informar o nome social"
      />

      <Transition
        enterActiveClass="duration-300 ease-out"
        enterFromClass="transform opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="transform opacity-0"
      >
        <BaseField
          v-if="shouldShowSocialName"
          label="Nome social"
          class="mt-4"
        >
          <BaseTextField
            v-model="localCreateAccountForm.socialName"
            :vuelidateField="v$.socialName"
            placeholder="Digite seu nome social"
          />
        </BaseField>
      </Transition>

      <BaseField label="Documento" class="mt-4">
        <BaseTextField
          v-model="localCreateAccountForm.documentNumber"
          :vuelidateField="v$.documentNumber"
          placeholder="Digite seu documento"
        />
      </BaseField>

      <BaseField label="E-mail" class="mt-4">
        <BaseTextField
          v-model="localCreateAccountForm.contacts.email"
          :vuelidateField="v$.contacts.email"
          placeholder="Digite seu email"
        />
      </BaseField>

      <BaseField label="Telefone" class="mt-4">
        <BaseTextField
          v-model="localCreateAccountForm.contacts.phone"
          :vuelidateField="v$.contacts.phone"
          placeholder="Digite seu telefone"
        />
      </BaseField>

      <BaseField label="Senha" class="mt-4">
        <BaseTextField
          type="password"
          v-model="localCreateAccountForm.password"
          :vuelidateField="v$.password"
          placeholder="Digite sua senha"
        />
      </BaseField>

      <div class="flex mt-10 w-full">
        <BaseButton
          class="mr-4"
          type="secondary"
          @click="onBack()"
        >
          Voltar
        </BaseButton>

        <BaseButton @click="onRegister()">
          Cadastrar-se
        </BaseButton>
      </div>
    </BaseForm>
  </div>
</template>

<script lang="ts">
import { phoneValidator, cpfValidator, emailValidator } from '@/modules/app/validators'
import { helpers, minLength, required, requiredIf } from '@vuelidate/validators'
import { CreateAccountFormDto } from '@/modules/auth/dtos'
import { ref, computed, defineComponent } from 'vue'
import useVuelidate from '@vuelidate/core'

export default defineComponent({
  name: 'CreateAccountForm',
  emits: ['back-to-login', 'register'],
  setup(_props, { emit }) {
    const localCreateAccountForm = ref(CreateAccountFormDto.blankForm())
    const shouldShowSocialName = ref(false)
    const rules = computed(() => ({
      legalName: {
        required: helpers.withMessage('Campo obrigatório', required),
        minLength: helpers.withMessage('O campo deve possuir ao menos 6 caracteres', minLength(6))
      },
      socialName: {
        required: helpers.withMessage('Campo obrigatório', requiredIf(shouldShowSocialName)),
        minLength: helpers.withMessage('O campo deve possuir ao menos 6 caracteres', minLength(6))
      },
      documentNumber: {
        required: helpers.withMessage('Campo obrigatório', required),
        cpfValidation: helpers.withMessage('O campo deve possuir ao menos 6 caracteres', cpfValidator)
      },
      contacts: {
        phone: {
          required: helpers.withMessage('Campo obrigatório', required),
          phoneValidation: helpers.withMessage('Formato de telefone não aceito', phoneValidator)
        },
        email: {
          required: helpers.withMessage('Campo obrigatório', required),
          emailValidation: helpers.withMessage('Email inválido', emailValidator)
        }
      },
      password: {
        required: helpers.withMessage('Campo obrigatório', required),
        minLength: helpers.withMessage('A senha deve possuir ao menos 6 caracteres', minLength(6))
      }
    }))

    const v$ = useVuelidate<CreateAccountFormDto>(rules, localCreateAccountForm, { $registerAs: 'CreateAccountPage' })
    const onSubmit = (): void => {
      console.log('submit')
    }
    const onRegister = (): void => {
      v$.value.$touch()

      if (v$.value.$error) {
        return
      }

      emit('register', localCreateAccountForm.value)
    }

    const onBack = (): void => {
      emit('back-to-login')
    }

    return {
      localCreateAccountForm,
      shouldShowSocialName,
      v$,
      onBack,
      onSubmit,
      onRegister
    }
  }
})
</script>
