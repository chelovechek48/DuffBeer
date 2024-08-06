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
    --feature-image-height: 10rem;

    display: flex;
    flex-direction: column;

    @media (max-width: $mobile) {
      flex: 0 0 100%;
      scroll-snap-align: start;
      scroll-snap-stop: always;
    }
  }

  $accordion-padding-bottom: 4rem;
  &__accordion {
    flex: 1 1 0;

    background-color: colors.$blue;
    color: colors.$white;

    font-size: 1.25rem;
    word-break: break-word;

    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;

    $padding: 1rem;
    $width: calc($accordion-padding-bottom - $padding * 2);
    $height: 2px;

    &[open] {
      &::before, &::after {
        rotate: 45deg;
      }
    }

    &::before, &::after {
      content: '';
      position: absolute;
      bottom: $padding;
      right: $padding;
      background-color: white;
      transition: rotate 300ms ease;
    }
    &::before {
      width: $height;
      height: $width;
      translate: calc(0px - $width / 2 + 50%) 0;
    }
    &::after {
      width: $width;
      height: $height;
      translate: 0 calc(0px - $width / 2 + 50%);
    }
  }

  &__button {
    padding: 1rem;
    padding-bottom: $accordion-padding-bottom;
  }
  &__description {
    padding: 1rem;
    position: absolute;
    inset: 0 0 $accordion-padding-bottom 0;
    overflow-y: auto;
    overflow-x: hidden;
    background-color: colors.$blue;
  }

  &__block {
    height: var(--feature-image-height);
    background-color: red;
  }
}
</style>
