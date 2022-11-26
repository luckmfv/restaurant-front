<template>
  <button :class="buttonClasses" :disabled="mustDisableButton" role="button" type="button" @click="onClick($event)">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { computed } from 'vue'
import { defineComponent, type PropType } from 'vue'

interface DynamicButton<T = any> {
  enabled: T
  disabled: T
}

interface ButtonVariant {
  default: string[]
  outline: string[]
  black: string[]
}

interface ButtonType {
  primary: string[]
  danger: string[]
  default: string[]
  secondary: string[]
  black: string[]
}

export default defineComponent({
  name: 'BaseButton',
  emits: ['click'],
  props: {
    type: {
      type: String as PropType<keyof ButtonType>,
      required: false,
      default: () => 'primary'
    },
    variant: {
      type: String as PropType<keyof ButtonVariant>,
      required: false,
      default: () => 'default'
    },
    disabled: {
      type: Boolean,
      required: false,
      default: () => false
    },
    isLoading: {
      type: Boolean,
      required: false,
      default: () => false
    }
  },
  setup(props, { emit }) {
    const buttonVariantClasses: ButtonVariant = {
      black: [],
      default: ['rounded-md', 'px-3 py-2'],
      outline: []
    }

    const buttonTypeClasses: DynamicButton<ButtonType> = {
      enabled: {
        primary: [
          'bg-blue-600 hover:bg-blue-700 transition-colors',
          'focus:ring-2 focus:ring-blue-300',
          'shadow-md shadow-blue-50',
          'text-white font-bold',
          'border-none'
        ],
        black: [],
        danger: [],
        default: [],
        secondary: [
          'bg-white hover:bg-blue-200 transition-colors',
          'focus:ring-2 focus:ring-blue-200',
          'shadow-md shadow-blue-50',
          'border-[1px]',
          'font-bold'
        ]
      },
      disabled: {
        primary: [
          'bg-blue-600 transition-colors',
          'focus:ring-2 focus:ring-blue-300',
          'shadow-md shadow-blue-50',
          'text-white font-bold',
          'border-none',
          'cursor-not-allowed'
        ],
        black: [],
        danger: [],
        default: [],
        secondary: [
          'bg-white hover:bg-blue-200 transition-colors',
          'focus:ring-2 focus:ring-blue-200',
          'shadow-md shadow-blue-50',
          'border-[1px]',
          'font-bold'
        ]
      }
    }

    const mustDisableButton = computed((): boolean => {
      return props.disabled || props.isLoading
    })
    const defaultClasses = ['w-full', 'transition-colors']
    const buttonClasses = computed((): string[] => {
      const dynamicProp: keyof DynamicButton = props.disabled ? 'disabled' : 'enabled'
      const buttonClassesArray = [...defaultClasses, ...buttonTypeClasses[dynamicProp][props.type], ...buttonVariantClasses[props.variant]]

      if (mustDisableButton.value) {
        buttonClassesArray.push('opacity-50')
      }

      return buttonClassesArray
    })

    const onClick = (event: MouseEvent): void => {
      emit('click', event)
    }

    return {
      onClick,
      buttonClasses,
      mustDisableButton
    }
  }
})
</script>
