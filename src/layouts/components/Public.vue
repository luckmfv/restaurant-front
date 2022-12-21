<template>
  <div id="layout-public" class="block h-full w-full min-h-screen">
    <RouterView />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'layout-public'
})
</script>
