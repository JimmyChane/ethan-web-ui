<script setup lang="ts">
import { computedAsync } from "@vueuse/core";
import HomeBanner from "./home/section/HomeBanner.vue";
import HomeOtherFursonas from "./home/section/HomeOtherFursonas.vue";

const show = computedAsync(async () => {
  await new Promise((r) => setTimeout(r, 100));
  return true;
}, false);
</script>

<template>
  <div class="home-page" :data-show="show">
    <HomeBanner />
    <HomeOtherFursonas />
  </div>
</template>

<style scoped lang="scss">
.home-page {
  transition: all 400ms ease;
  opacity: 0;
  transform: translateY(0.5rem);

  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  &[data-show="true"] {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
