<template>
  <component :is="resolvedLayout"></component>
</template>

<script lang="ts">
import { LayoutPublic, LayoutPrivate } from '@/layouts/components'
import { defineComponent, computed } from 'vue'
import { Layout } from '@/layouts/enums'
import { useRoute } from 'vue-router'

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