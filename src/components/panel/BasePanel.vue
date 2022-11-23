<template>
  <div :class="[
    'base-card bg-white h-fit',
    'shadow-md',
    'rounded-md',
    computedSpacing
  ]">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue'
import { defineComponent, type PropType } from 'vue'
import { BasePanelSpacingEnum } from './enums'

const spacingClasses: Record<BasePanelSpacingEnum, string> = {
  sm: 'p-2',
  md: 'p-4',
  lg: 'p-6',
  none: 'p-0'
}

export default defineComponent({
  name: 'BasePanel',
  props: {
    spacing: {
      type: String as PropType<BasePanelSpacingEnum>,
      required: false,
      default: () => BasePanelSpacingEnum.MD
    }
  },
  setup(props) {
    const computedSpacing = computed(() => {
      return spacingClasses[props.spacing]
    })

    return {
      computedSpacing
    }
  }
})
</script>