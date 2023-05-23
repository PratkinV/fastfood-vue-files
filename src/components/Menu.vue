<script setup lang="ts">
import type { MenuItem } from '../types';
import MenuCardItem from './MenuCardItem.vue';
defineProps<{
  menu: MenuItem[]
}>()
</script>

<template>
  <main>
    <ul class="menu__container">
      <li v-for="menuItem of menu" :key="menuItem.id">
        <MenuCardItem :menu-item="menuItem" />
      </li>
    </ul>
  </main>
</template>

<style scoped lang="scss">
.menu__container {
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  grid-gap: 17px;
}

@media (min-width: 768px) {
  .menu__container {
    grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  }
}

@media (min-width: 1199px) {
  .menu__container {
    grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
  }
}

main {
  min-height: 700px;
}
</style>
