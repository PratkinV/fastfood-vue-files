<script setup lang="ts">
import { ref } from 'vue';
import Logo from './icons/Logo.vue'; 
import HamburgerMenu from './icons/HamburgerMenu.vue';
import Close from './icons/Close.vue';
import Navigation from './Navigation.vue';

const shouldShowMenu = ref<boolean>(false);

function setShowMenu(value: boolean) {
  shouldShowMenu.value = value;
}
</script>

<template>
  <header class="header">
    <a
      class="header__link"
      href="https://vkusnoitochka.ru/"
    >
      <Logo />
    </a>
    <HamburgerMenu
      v-if="!shouldShowMenu"
      @click="setShowMenu(true)"
      class="header__menu"
    />
    <Close
      v-else
      @click="setShowMenu(false)"
      class="header__menu"
    />
  </header>
  <Navigation v-if="shouldShowMenu" />
</template>

<style scoped lang="scss">
.header {
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  background-color: #fff;
  z-index: 1;
  padding: 8px 19px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 5px 14px 0px;
  display: flex;
  justify-content: space-between;
  height: 44px;

  &__link {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__menu {
    cursor: pointer;
  }
}

@media (min-width: 1199px) {
  .header {
    left: unset;
    right: unset;
    left: 50%;
    transform: translate(-50%, 0);
    min-width: 1200px;
  }
}
</style>
