<template>
  <div class="base-field">
    <label v-if="label">{{ label }}</label>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BaseField',
  emits: ['update:modelValue', 'change', 'blur', 'focus'],
  props: {
    label: {
      type: String,
      required: false
    }
  },
  setup(_props) {
    return {}
  }
})
</script>