<!-- eslint-disable no-undef -->
<script setup>
import jsonnn from '@json/features.json';
import Accordion from '@js/accordion.js';

const accordionList = ref(null);

onMounted(() => {
  accordionList.value.forEach((accordionDOM) => {
    new Accordion(accordionDOM);
  });
});
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
          <div class="features__block" />
          <details
            class="features__accordion"
            ref="accordionList"
          >
            <summary class="features__button">
              {{ item.title }}
            </summary>
            <aside class="features__description">
              {{ item.description }}
            </aside>
          </details>
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
    @media (max-width: $mobile) {
      flex: 0 0 100%;
      scroll-snap-align: start;
      scroll-snap-stop: always;
    }
  }

  &__accordion {
    position: relative;
    color: colors.$white;
    background-color: colors.$blue;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__button {
    font-size: 1.25rem;
    padding-bottom: 3rem
  }
  &__description {
    position: absolute;
    inset: 0 0 3rem 0;
    font-size: 1.25rem;
    overflow-y: auto;
    background-color: colors.$blue;
  }

  --feature-image-height: 10rem;

  &__block {
    height: var(--feature-image-height);
    background-color: red;
  }
}
</style>
