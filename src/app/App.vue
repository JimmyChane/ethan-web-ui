<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";
import { RouterView, useRoute } from "vue-router";
import HomeBackground from "@/assets/bg/bg-home.jpg";
import { HOME } from "@/router";

const route = useRoute();

const show = ref(false);
const refAppBody = ref<HTMLDivElement>();
const appBodyScrollTop = ref(0);
const appBackground = ref("");

const routeName = computed(() => route.name);

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

watch(routeName, () => {
  refAppBody.value?.scrollTo({ top: 0 });

  const name = route.name;
  show.value = false;
  setTimeout(() => {
    if (name !== route.name) return;
    appBackground.value = getBackground();
    show.value = true;
  }, 400);
});

onMounted(() => {
  appBackground.value = getBackground();
  setTimeout(() => (show.value = true), 100);
});
</script>

<template>
  <div class="app">
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
