<script setup lang="ts"></script>

<template>
  <div class="home-banner-avatar">
    <img src="@/assets/avatar.png" />
  </div>
</template>

<style scoped lang="scss">
.home-banner-avatar {
  z-index: 2;
  position: absolute;
  bottom: 0;

  height: 100%;
  width: 100%;
  max-width: 40rem;
  min-height: 6rem;
  max-height: 60%;

  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  & > img {
    height: 100%;
    object-fit: contain;
  }
}
</style>
