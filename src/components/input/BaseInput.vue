<template>
  <div class="base-input w-full">
    <div>
      <input
        :class="[
          'w-full',
          'outline-none focus:ring-2 focus: ring-blue-100',
          'rounded border-[1px] border-solid border-blue-100 focus:border-transparent',
          'shadow-md shadow-blue-50',
          'p-2',
          'text-gray-800'
        ]"
        :value="modelValue"
        :type="type"
        :placeholder="placeholder"
        @input="onInput($event)"
        @change="onChange($event)"
        @blur="onBlur($event)"
        @focus="onFocus($event)"
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BaseInput',
  emits: ['update:modelValue', 'blur', 'focus', 'change'],
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
  setup(_props, { emit }) {
    const onInput = (event: any): void => {
      emit('update:modelValue', event.target.value)
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
      onInput,
      onChange,
      onFocus,
      onBlur
    }
  }
})
</script>