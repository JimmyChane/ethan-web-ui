<script setup lang="ts">
import { FULL_NAME } from "@/model/Fursona";
import { computed } from "vue";

const name = computed(() => FULL_NAME);
</script>

<template>
  <div class="home-banner-body">
    <span>
      I'm
      <b>{{ name }}</b>
    </span>
  </div>
</template>

<style scoped lang="scss">
.home-banner-body {
  z-index: 4;
  position: relative;

  width: 100%;
  max-width: 60rem;
  height: 100%;
  max-height: 50%;

  padding: 4rem 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  & > span {
    display: flex;
    flex-direction: column;

    & > b {
      font-size: 2em;
    }
  }

  @media (min-width: 440px) {
    font-size: 1.2rem;
  }
  @media (min-width: 550px) {
    font-size: 1.4rem;
    padding: 4rem 2rem;
  }
  @media (min-width: 650px) {
    font-size: 1.5rem;
    padding: 4rem 3rem;
  }
}
</style>
