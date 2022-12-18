<template>
  <router-link
    class="
      sidebar-item
      flex flex-col
      items-center
      px-4 py-5
      rounded-3xl
      hover:bg-blue-100
      text-gray-600
      cursor-pointer
    "
    :to="resolvedRoute"
    target="_self"
    v-tippy="{ content: siderbarItem.label }"
    @click="onClick()"
  >
    <FontAwesomeIcon :icon="siderbarItem.icon" class="text-2xl" />
    <!-- <span class="text-sm mt-2"> {{ siderbarItem.label }} </span> -->
  </router-link>
</template>

<script lang="ts">
import type { SidebarItem } from '@/components/sidebar/types'
import { computed, defineComponent, type PropType } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
  name: 'BaseSidebarItem',
  props: {
    siderbarItem: {
      type: Object as PropType<SidebarItem>,
      required: true
    }
  },
  setup(props) {
    const route = useRoute()
    const router = useRouter()
    const isSelected = computed((): boolean => {
      return props.siderbarItem.redirectTo === route.name
    })

    const resolvedRoute = computed(() => ({ name: props.siderbarItem.redirectTo || '' }))

    const onClick = (): void => {
      router.push({ name: props.siderbarItem.redirectTo })
    }

    return {
      resolvedRoute,
      isSelected,
      onClick
    }
  }
})
</script>