<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { RouterView, useRoute } from "vue-router";
import AppBackground from "./App-Background.vue";
import HomeBackground from "@/assets/bg/bg-home.webp";
import { HOME } from "@/router";

const route = useRoute();

const show = ref(false);
const refAppBody = ref<HTMLDivElement>();
const appBodyScrollTop = ref(0);
const appBackground = ref("");

function onScroll(e: Event): void {
  const target = e.target as HTMLDivElement;
  appBodyScrollTop.value = target.scrollTop ?? 0;
}
function getBackground(): string {
  switch (route.name) {
    case HOME.id:
      return HomeBackground;
    default:
      return "";
  }
}

watch(
  () => route.name,
  () => {
    refAppBody.value?.scrollTo({ top: 0 });

    const name = route.name;
    show.value = false;
    setTimeout(() => {
      if (name !== route.name) return;
      appBackground.value = getBackground();
      show.value = true;
    }, 400);
  },
);

onMounted(() => {
  appBackground.value = getBackground();
  setTimeout(() => (show.value = true), 100);
});
</script>

<template>
  <div class="app">
    <div class="app-background-parent" :data-show="show">
      <AppBackground :style="{ 'z-index': '1' }" :src="appBackground" />
    </div>

    <div class="app-body" :style="{ 'z-index': '2' }" ref="refAppBody" @scroll="onScroll">
      <RouterView :style="{ 'z-index': '1' }" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.app {
  width: 100%;
  height: 100dvh;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  .app-background-parent {
    transition: all 400ms ease;
    opacity: 0;
    transform: scale(1.02);

    pointer-events: none;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    &[data-show="true"] {
      opacity: 0.4;
      transform: scale(1);
    }
  }
  .app-body {
    width: 100%;
    height: 100dvh;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
  }
}
</style>
