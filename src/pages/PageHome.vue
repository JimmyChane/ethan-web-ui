<script setup lang="ts">
import { computedAsync } from "@vueuse/core";
import { FULL_NAME } from "@/model/Fursona";
import { computed } from "vue";
import HomeBackground from "@/assets/bg/bg-home.jpg";

const show = computedAsync(async () => {
  await new Promise((r) => setTimeout(r, 100));
  return true;
}, false);

const name = computed(() => FULL_NAME);
</script>

<template>
  <div class="home-page" :data-show="show">
    <div class="home-banner">
      <img class="home-banner-background" :src="HomeBackground" />

      <div class="home-banner-gradient"></div>

      <div class="home-banner-avatar">
        <img src="@/assets/avatar.png" />
      </div>

      <div class="home-banner-body">
        <span>
          I'm
          <b>{{ name }}</b>
        </span>

        <p>Everyone calles me Fang</p>
      </div>
    </div>

    <div class="home-other-fursonas">
      <span class="home-other-fursonas-title">My Other Fursona</span>
      <div class="home-other-fursonas-item">
        <img />

        <div class="home-other-fursonas-body">
          <span>Rhougous Hiroki</span>
          <p>Meet Rhougous Hiroki, a Western dragon with earth and water elements.</p>
          <a href="https://www.rhougous.net">Visit site</a>
        </div>
      </div>
    </div>
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

  .home-banner {
    width: 100%;
    height: 20rem;

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
      height: 10rem;

      display: flex;

      background-image: linear-gradient(transparent 0%, var(--background-color) 100%);
    }
    .home-banner-avatar {
      z-index: 2;
      position: absolute;
      bottom: 0;

      width: 100%;
      max-width: 40rem;

      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
    }
    .home-banner-body {
      z-index: 4;
      position: relative;

      width: 100%;
      max-width: 40rem;
      height: 100%;

      padding: 4rem 1rem;

      & > span {
        display: flex;
        flex-direction: column;

        & > b {
          font-size: 2em;
        }
      }
    }
  }
  .home-other-fursonas {
    width: 100%;
    max-width: 40rem;

    padding: 1rem;
    padding-top: 2rem;
    gap: 1rem;

    display: flex;
    flex-direction: column;
    .home-other-fursonas-title {
      font-size: 1.4rem;
    }
    .home-other-fursonas-item {
      gap: 1rem;
      display: flex;

      & > img {
        width: 10rem;
        height: 10rem;
      }
      .home-other-fursonas-body {
        gap: 1rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        & > span {
          color: white;
          font-size: 1.4rem;
        }
        & > p {
        }
        & > a {
          --font-color: hsla(0, 0%, 100%, 0.8);

          color: var(--font-color);
          text-decoration: none;
          border: 1px solid var(--font-color);
          padding: 0.6rem 2rem;
          border-radius: 2em;
          text-align: center;
        }
      }
    }
  }
}
</style>
