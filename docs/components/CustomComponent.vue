<script setup lang="ts">
import { ref } from 'vue';
const str = ref('This is a custom component')
</script>

<template>
  <div class="custom-component pointer">{{ str }}</div>
</template>

<style lang="scss">
@import '../styles/common.scss';
.custom-component {
  color: var(---text-color);
}
</style>