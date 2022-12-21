<template>
  <div class="base-checkbox">
    <input
      class="relative mr-1 top-[1px]"
      type="checkbox"
      :name="name"
      :value="localModelValue"
      @change="onChange()"
    >
    <span>
      {{ label }}
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
  name: 'BaseCheckbox',
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: Boolean,
      required: true
    },
    name: {
      type: String,
      required: false
    },
    label: {
      type: String,
      required: true
    }
  },
  setup(props, { emit }) {
    const localModelValue = ref(props.modelValue)

    const onChange = (): void => {
      emit('update:modelValue', !localModelValue.value)
    }

    watch(() => props.modelValue,  (newValue) => {
      localModelValue.value = newValue
    })

    return {
      localModelValue,
      onChange
    }
  }
})
</script>
