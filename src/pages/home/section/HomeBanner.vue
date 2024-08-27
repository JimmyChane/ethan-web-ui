<script setup lang="ts">
import HomeBackground from "@/assets/bg/bg-home.jpg";
import HomeAvatar from "./HomeBanner-Avatar.vue";
import HomeBannerContent from "./HomeBanner-Content.vue";
</script>

<template>
  <div class="home-banner">
    <img class="home-banner-background" :src="HomeBackground" />
    <div class="home-banner-gradient"></div>
    <HomeAvatar />
    <HomeBannerContent />
  </div>
</template>

<style scoped lang="scss">
.home-banner {
  width: 100%;
  height: 50rem;
  max-height: 60dvh;

  overflow: hidden;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  .home-banner-background {
    z-index: 1;
    width: 100%;
    position: absolute;
  }
  .home-banner-gradient {
    z-index: 3;
    position: absolute;
    bottom: 0;

    width: 100%;
    height: 20%;
    max-height: 10rem;

    display: flex;

    background-image: linear-gradient(transparent 0%, var(--background-color) 100%);
  }
}
</style>
