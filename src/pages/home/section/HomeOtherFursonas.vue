<script setup lang="ts">
import HomeOtherFursonasItem from "./HomeOtherFursonas-Item.vue";
</script>

<template>
  <div class="home-other-fursonas">
    <span class="home-other-fursonas-title">My Other Fursona</span>

    <HomeOtherFursonasItem />
  </div>
</template>

<style scoped lang="scss">
.home-other-fursonas {
  width: 100%;
  max-width: 60rem;

  padding: 1rem;
  padding-top: 2rem;
  gap: 1rem;

  display: flex;
  flex-direction: column;

  .home-other-fursonas-title {
    font-size: 1.4rem;
    font-weight: bold;
  }

  @media (min-width: 440px) {
  }
  @media (min-width: 550px) {
    padding: 4rem 2rem;
  }
  @media (min-width: 650px) {
    padding: 4rem 3rem;
  }
}
</style>
