<script setup lang="ts">
import { ref, computed } from 'vue';
import PageContainer from './components/layout/PageContainer.vue';
import Header from './components/Header.vue';
import Menu from './components/Menu.vue';
import MenuFilter from './components/MenuFilter.vue';
import Promo from './components/Promo.vue';
import SectionLayout from './components/layout/SectionLayout.vue';

import { ALL } from './constants';
import { MOCK_MENU, MOCK_PROMO } from './mocks';
import type { MenuItem, PromoItem, FilterBy } from './types';

const menu = ref<MenuItem[]>(MOCK_MENU);
const promo = ref<PromoItem[]>(MOCK_PROMO);
const filterBy = ref<FilterBy>(ALL);

const filteredMenu = computed(() =>
  menu.value.filter(menuItem =>
    filterBy.value !== ALL
      ? menuItem.sticker === filterBy.value
      : true
  ));

function setFilterBy(value: FilterBy) {
  filterBy.value = value;
}
</script>

<template>
  <Header />
  <PageContainer>
    <SectionLayout title-text="Наши акции">
      <Promo :promo="promo" />
    </SectionLayout>
    <SectionLayout title-text="Наше меню">
      <MenuFilter
        @set-filter-by="setFilterBy"
        :filter-by="filterBy"
      />
      <Menu :menu="filteredMenu"/>
    </SectionLayout>
  </PageContainer>
</template>
