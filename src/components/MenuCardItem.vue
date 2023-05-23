<script setup lang="ts">
import type { MenuItem } from '../types';
import CardLayout from './layout/CardLayout.vue';
import Sticker from './Sticker.vue';
defineProps<{
  menuItem: MenuItem
}>()
</script>

<template>
  <CardLayout>
    <div class="container">
      <div class="image__container" :title="menuItem.detailText">
        <img :src="menuItem.image" :alt="menuItem.name" />
        <Sticker :sticker="menuItem.sticker" />
      </div>
      <div class="product__container">
        <div class="product__info">
          {{ menuItem.name }}
        </div>
        <div class="product__price">
          <span>от</span> {{ menuItem.price }} <span>₽</span>
        </div>
      </div>
    </div>
  </CardLayout>
</template>

<style scoped lang="scss">
.container {
  padding: 9px 12px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.image__container {
  height: 130px;
  position: relative;
  margin-bottom: 9px;

  img {
    display: block;
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
}

.product__info {
  font-family: 'ITC-Franklin-Gothic-Light', sans-serif;
  font-size: 15px;
  text-align: center;
  min-height: 52px;
  line-height: 1.13;
  display: flex;
  justify-content: center;
  align-items: center;
}

.product__price {
  font-family: 'ITC-Franklin-Gothic-Heavy', sans-serif;
  font-size: 17px;
}

@media (min-width: 768px) {
  .image__container {
    height: 200px;
  }
}

@media (min-width: 1199px) {
  .image__container {
    height: 240px;
  }

  .product__info {
    font-size: 17px;
  }
}
</style>
