<template>
  <div id="layout-public" class="flex h-full w-full justify-center items-center min-h-screen">
    <RouterView />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'layout-public'
})
</script>