<template>
  <LayoutResolver />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { LayoutResolver } from './layouts/components'

export default defineComponent({
  name: 'App',
  components: {
    LayoutResolver
  }
})
</script>
<style>
#app {
  background-color: theme('colors.blue.50');
  width: theme('width.full');
  height: theme('height.full');
  min-height: 100vh;
  font-family: theme('fontFamily.base');
}
</style>
