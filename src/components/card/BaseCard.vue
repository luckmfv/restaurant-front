<template>
  <div :class="[
    'base-card bg-white w-fit h-fit',
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
import { BaseCardSpacingEnum } from './enums'

const spacingClasses: Record<BaseCardSpacingEnum, string> = {
  sm: 'p-2',
  md: 'p-4',
  lg: 'p-6',
  none: 'p-0'
}

export default defineComponent({
  name: 'BaseCard',
  props: {
    spacing: {
      type: String as PropType<BaseCardSpacingEnum>,
      required: false,
      default: () => BaseCardSpacingEnum.MD
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