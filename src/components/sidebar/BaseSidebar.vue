<template>
  <div
    id="sidebar"
    class="
      baseSidebar
      fixed
      overflow-x-hidden
      overflow-y-auto
      flex flex-col
      max-w-[12rem] min-h-screen
      shadow-md
      bg-white
      px-4
      h-full
      scrollbar-thin scrollbar-thumb-blue-100 scrollbar-track-blue-50
      transition ease-in-out delay-150 duration-300
    "
  >
    <div class="flex flex-col h-full justify-between">
      <div class="flex flex-col">
        <BaseSidebarLogo class="mt-4 mb-6"/>
        <template v-for="(sidebarItem, index) in sidebarItems" :key="index">
          <BaseSidebarItem :siderbar-item="sidebarItem" class="mt-4"/>
        </template>
      </div>
      <BaseSidebarItem class="mt-4" :siderbar-item="accountMenuItem" />
    </div>

    <div class="mb-4">
    </div>
  </div>
</template>

<script lang="ts">
import type { SidebarItem } from '@/components/sidebar/types'
import { useProfile } from '@/modules/app/compositions'
import { defineComponent } from 'vue'
import { BaseSidebarItem, BaseSidebarLogo } from './components'

export default defineComponent({
  name: 'BaseSidebar',
  props: {},
  components: { BaseSidebarItem, BaseSidebarLogo },
  setup(_props) {
    const sidebarItems: SidebarItem[] = [
      {
        label: 'Meu restaurante',
        icon: ['fas', 'store']
      },
      {
        label: 'Produtos',
        icon: ['fas', 'box']
      },
      {
        label: 'Pedidos',
        icon: ['fas', 'bag-shopping']
      },
      {
        label: 'Mesas',
        icon: ['fas', 'utensils']
      },
      {
        label: 'Contas',
        icon: ['fas', 'file-invoice-dollar']
      },
      {
        label: 'Funcionários',
        icon: ['fas', 'user-friends']
      }
    ]

    const accountMenuItem: SidebarItem =  {
      label: 'Minha conta',
      icon: ['fas', 'user']
    }

    const { profile } = useProfile()
    return {
      profile,
      sidebarItems,
      accountMenuItem
    }
  }
})
</script>