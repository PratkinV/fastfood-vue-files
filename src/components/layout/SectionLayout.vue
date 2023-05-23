<script setup lang="ts">
defineProps<{
  titleText: string
}>()
</script>

<template>
  <div class="section">
    <h2 class="title">{{ titleText }}</h2>
    <slot></slot>
  </div>
</template>

<style scoped>
.section {
  margin-top: 24px;
}

.title {
  font-family: 'ITC-Franklin-Gothic-Heavy', sans-serif;
  font-size: 42px;
  line-height: 1.14;
  color: #000;
  margin: 0;
}

@media (max-width: 767px) {
  .title {
    font-size: 28px;
  }
}
</style>
