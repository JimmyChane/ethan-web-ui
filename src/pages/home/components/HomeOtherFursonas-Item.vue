<script setup lang="ts"></script>

<template>
  <a class="home-other-fursonas-item" href="https://www.rhougous.net" target="_blank">
    <div class="home-other-fursonas-item-image">
      <img src="@/assets/rhougous-transparent.webp" />
    </div>

    <div class="home-other-fursonas-body">
      <span class="home-other-fursonas-body-title">Rhougous Hiroki</span>
      <p>Meet Rhougous Hiroki, a Western dragon with earth and water elements.</p>
      <span class="home-other-fursonas-body-hint">Visit site</span>
    </div>
  </a>
</template>

<style scoped lang="scss">
.home-other-fursonas-item {
  max-width: 30rem;
  gap: 1rem;
  display: flex;

  .home-other-fursonas-item-image {
    --size: 8rem;
    width: var(--size);
    height: var(--size);
    min-width: var(--size);
    min-height: var(--size);
    max-width: var(--size);
    max-height: var(--size);

    display: flex;
    align-items: flex-start;

    overflow: hidden;
    border-radius: 0.5rem;

    background-color: #2c3237;

    & > img {
      width: 100%;
      object-fit: contain;
    }
  }
  .home-other-fursonas-body {
    gap: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .home-other-fursonas-body-title {
      font-size: 1.4rem;
      font-weight: bold;
    }
    & > p {
      font-size: 0.9rem;
    }
    .home-other-fursonas-body-hint {
      --font-color: hsla(0, 0%, 100%, 0.8);

      margin-top: auto;
      padding: 0.6rem 1.5rem;

      color: var(--font-color);
      font-size: 0.9rem;
      border: 1px solid var(--font-color);
      border-radius: 2em;
      text-align: center;
    }
  }
}
</style>
