<template>
  <div class="flex flex-col w-full min-w-[300px] p-4">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BaseContent'
})
</script>
