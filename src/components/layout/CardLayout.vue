<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.card {
  box-shadow: rgba(0, 0, 0, 0.07) 0px 5px 20px 0px;
  border-radius: 12px;
  cursor: pointer;
  overflow: hidden;
}
</style>
