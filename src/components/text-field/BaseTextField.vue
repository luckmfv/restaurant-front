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
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
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

    const onInput = (value: string | number): void => {
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
      localModelValue
    }
  }
})
</script>