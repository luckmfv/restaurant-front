<template>
  <form class="base-form flex flex-col" @submit="onSubmit($event)">
    <slot></slot>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BaseForm',
  emits: ['submit'],
  setup(_props, { emit }) {
    const onSubmit = (event: FormDataEvent): void => {
      event.preventDefault()
      emit('submit')
    }

    return { onSubmit }
  }
})
</script>
