<script setup lang="ts">
import type { PromoItem } from '../types';
import PromoCardItem from './PromoCardItem.vue';
defineProps<{
  promo: PromoItem[]
}>()
</script>

<template>
  <aside>
    <ul class="promo__container">
      <li v-for="promoItem of promo" :key="promoItem.id">
        <PromoCardItem :promo-item="promoItem" />
      </li>
    </ul>
  </aside>
</template>

<style scoped lang="scss">
.promo__container {
  margin: 10px -19px;
  display: flex;
  overflow-x: scroll;
  padding: 16px 0px 16px 0px;
  scroll-snap-type: x mandatory;

  li {
    scroll-snap-align: start;
    padding-left: 19px;

    &:last-child {
      margin-right: 40px;
    }
  }
}
</style>
