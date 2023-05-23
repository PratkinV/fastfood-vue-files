<template>
  <nav class="menu">
    <ul>
      <li>
        <a href="https://vkusnoitochka.ru/">
          Главная
        </a>
      </li>
      <li>
        <a href="https://vkusnoitochka.ru/">
          Меню
        </a>
      </li>
      <li>
        <a href="https://vkusnoitochka.ru/">
          Акции
        </a>
      </li>
      <li>
        <a href="https://vkusnoitochka.ru/">
          Кафе
        </a>
      </li>
      <li>
        <a href="https://vkusnoitochka.ru/">
          Качество
        </a>
      </li>
      <li>
        <a href="https://vkusnoitochka.ru/">
          Новинки
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.menu {
  position: fixed;
  top: 44px;
  background-color: #fff;
  left: 0px;
  right: 0px;
  z-index: 1;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 5px 5px 0px;

  li {
    font-family: 'ITC-Franklin-Gothic-Light', sans-serif;
    padding: 14px 19px;
    cursor: pointer;
    border-top: 1px solid rgb(233, 233, 233);

    &:hover {
      background-color: #fff8e7;
    }
  }
}

@media (min-width: 1199px) {
  .menu {
    left: unset;
    right: unset;
    left: 50%;
    transform: translate(-50%, 0);
    min-width: 1200px;
  }
}
</style>