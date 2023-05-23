<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style scoped>
.container {
  padding-top: 40px;
  padding-right: 19px;
  padding-left: 19px;
}

@media (min-width: 768px) {
  .container {
    padding-right: 24px;
    padding-left: 24px;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
}
</style>