<script setup>
import jsonnn from '@json/features.json';
</script>

<template>
  <section class="features">
    <div class="features__container container">
      <h2 class="features__title">
        Наши преимущества
      </h2>
      <ul class="features__list">
        <li
          class="features__item"
          v-for="item in jsonnn"
          :key="item.title"
        >
          {{ item.title }}
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@vars/colors';
@use '@vars/breakpoints' as *;

.features {
  padding-block: clamp(4rem, 7vw, 6rem);
  color: colors.$blue;
  background-color: colors.$beige;

  &__title {
    font-size: clamp(1rem, 5vw, 2.5rem);
  }

  &__list {
    margin-top: 3rem;

    gap: 2rem;

    @media (min-width: calc($mobile + 1px)) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: $mobile) {
      display: flex;
      overflow-x: scroll;
      scroll-snap-type: x mandatory;
    }
  }

  &__item {
    color: colors.$white;
    background-color: colors.$blue;
    height: 10rem;

    @media (max-width: $mobile) {
      flex: 0 0 100%;
      scroll-snap-align: start;
      scroll-snap-stop: always;
    }
  }
}
</style>
