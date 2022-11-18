<template>
  <component :is="resolvedLayout"></component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { LayoutPublic, LayoutPrivate } from '@/layouts/components'
import { computed } from '@vue/reactivity'
import { useRoute } from 'vue-router'
import { Layout } from '../enums'

export default defineComponent({
  name: 'layout-resolver',
  components: {
    LayoutPublic,
    LayoutPrivate
  },
  setup() {
    const route = useRoute()
    const resolvedLayout = computed((): string => {
      const { layout } = route.meta

      if (layout === Layout.PRIVATE) {
        return 'LayoutPrivate'
      }

      return 'LayoutPublic'
    })
    return {
      resolvedLayout
    }
  }
})
</script>