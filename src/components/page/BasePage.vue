<template>
  <div id="page" class="page">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue'

export default defineComponent({
  name: 'BasePage',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup(props) {
    watch(
      () => props.title,
      (newTitle) => {
        document.title = newTitle
      }
    )
  }
})
</script>