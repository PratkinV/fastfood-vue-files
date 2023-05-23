<script setup lang="ts">
import type { PromoItem } from '../types';
import CardLayout from './layout/CardLayout.vue';
defineProps<{
  promoItem: PromoItem
}>()
</script>

<template>
  <CardLayout>
    <div class="container">
      <div class="info__container">
        <div>
          <p class="info">
            {{ promoItem.name }}
          </p>
          <p class="text">
            Ждем тебя!
          </p>
        </div>
        <p class="period">
          {{ promoItem.period }}
        </p>
      </div>
      <div class="image__container">
        <img :src="promoItem.image" :alt="promoItem.name" />
      </div>
    </div>
  </CardLayout>
</template>

<style scoped lang="scss">
.container {
  border-left: 7px rgb(238, 114, 3) solid;
  display: flex;
  flex-direction: row;
  position: relative;
  user-select: none;
}

.image__container {
  height: 200px;
  width: 130px;
  position: relative;

  img {
    display: block;
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
}

.info__container {
  width: 170px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 15px 0 18px 24px;
}

.text {
  line-height: 15px;
  font-size: 13px;
  font-family: 'ITC-Franklin-Gothic-Light', sans-serif;
}

.period {
  line-height: 10px;
  font-size: 10px;
  color: rgb(173, 173, 173);
  font-family: 'ITC-Franklin-Gothic-Light', sans-serif;
}

.info {
  line-height: 20px;
  font-size: 17px;
  margin-bottom: 4px;
  min-width: 170px;
  font-family: 'ITC-Franklin-Gothic-Heavy', sans-serif;
}

@media (min-width: 1200px) {
  .image__container {
    height: 240px;
    width: 155px;
  }

  .info {
    font-size: 19px;
    margin-bottom: 8px;
  }

  .info__container {
    width: 230px;
  }
}
</style>
