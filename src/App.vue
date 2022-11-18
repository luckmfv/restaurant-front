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
