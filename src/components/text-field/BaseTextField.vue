<template>
  <div class="base-text-field">
    <BaseInput
      class="mt-1"
      v-model="localModelValue"
      :type="type"
      :placeholder="placeholder"
      @change="onChange($event)"
      @blur="onBlur($event)"
      @focus="onFocus($event)"
    />
    <p v-if="shouldShowErrorMessage" class="text-red-500 mt-1 text-xs pl-1">
      {{ errorMessage }}
    </p>
  </div>
</template>

<script lang="ts">
import type { BaseValidation, ValidationRuleCollection } from '@vuelidate/core'
import { defineComponent, type PropType } from 'vue'
import { computed } from 'vue'

export default defineComponent({
  name: 'BaseTextField',
  emits: ['update:modelValue', 'change', 'blur', 'focus'],
  props: {
    modelValue: {
      type: [String, Number],
      required: true,
      default: () => ''
    },
    type: {
      type: String,
      required: false,
      default: () => 'text'
    },
    placeholder: {
      type: String,
      required: false,
      default: () => ''
    },
    vuelidateField: {
      type: Object as PropType<BaseValidation<any, ValidationRuleCollection<any>>>,
      required: false
    },
    resetOnChange: {
      type: Boolean,
      required: false,
      dafault: () => false
    }
  },
  setup(props, { emit }) {
    const localModelValue = computed({
      get: () => {
        return props.modelValue
      },
      set: (value: string | number) => {
        onInput(value)
      }
    })

    const shouldShowErrorMessage = computed(() => Boolean(props.vuelidateField?.$error))

    const errorMessage = computed(() => {
      if (!shouldShowErrorMessage.value) {
        return ''
      }

      const [error] = props.vuelidateField.$errors

      return error.$message
    })

    const shouldResetOnChange = computed(() => props.resetOnChange && props.vuelidateField)

    const onInput = (value: string | number): void => {
      if (shouldResetOnChange.value) {
        props.vuelidateField.$reset()
      }

      emit('update:modelValue', value)
    }

    const onChange = (event: any): void => {
      emit('change', event)
    }

    const onFocus = (event: any): void => {
      emit('focus', event)
    }

    const onBlur = (event: any): void => {
      emit('blur', event)
    }

    return {
      onChange,
      onFocus,
      onBlur,
      shouldShowErrorMessage,
      localModelValue,
      errorMessage
    }
  }
})
</script>