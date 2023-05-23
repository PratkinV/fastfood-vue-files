<script setup lang="ts">
import type { Sticker } from '../types';
import { STICKER_CONFIG } from '../constants';
const props = defineProps<{
  sticker?: Sticker
}>()

const config = props.sticker && STICKER_CONFIG[props.sticker] || undefined;

</script>

<template>
  <span
    v-if="config"
    class="sticker"
    :style="{ backgroundColor: config.backgroundColor }"
  >
    {{ config.label }}
  </span>
</template>

<style scoped lang="scss">
.sticker {
  position: absolute;
  top: 8px;
  left: 13px;
  color: #fff;
  padding: 3px 8px;
  border-radius: 3px;;
  font-size: 9px;
}
</style>
