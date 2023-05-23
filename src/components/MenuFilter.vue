<script setup lang="ts">
import { ALL, NEW, POPULAR } from '../constants';
defineProps<{
  filterBy: string;
}>()
</script>

<template>
  <div class="filter__container">
    <div
      @click="$emit('set-filter-by', ALL)"
      :class="{ 'filter__item': true, 'active': filterBy === ALL }"
    >
      Все
    </div>
    <div
      @click="$emit('set-filter-by', NEW)"
      :class="{ 'filter__item': true, 'active': filterBy === NEW }"
    >
      Новинки
    </div>
    <div
      @click="$emit('set-filter-by', POPULAR)"
      :class="{ 'filter__item': true, 'active': filterBy === POPULAR }"
    >
      Популярное
    </div>
  </div>
</template>

<style scoped lang="scss">
.filter__container {
  display: flex;
  margin: 14px 0;
  overflow: auto;
  white-space: nowrap;
}

.filter__item {
  display: flex;
  align-items: center;
  padding: 0 14px;
  border-radius: 24px;
  height: 40px;
  font-size: 13px;
  font-family: 'ITC-Franklin-Gothic-Light', sans-serif;
  cursor: pointer;

  &.active {
    background-color: rgb(244, 244, 244);
  }
}

</style>
