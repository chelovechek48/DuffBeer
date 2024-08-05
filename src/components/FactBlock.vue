<template>
  <aside class="fact">
    <div class="fact__container container">
      <img
        class="fact__icon"
        src="@icons/arrow.svg"
        alt="стрелочка"
        aria-hidden="true"
      >
      <p class="fact__paragraph">
        Каждое 3-е хлебобулочное изделие в мире произведено с использованием продукции DuffBeer
      </p>
    </div>
  </aside>
</template>

<style lang="scss" scoped>
@use '@vars/breakpoints' as *;;
@use '@vars/colors';

.fact {
  color: colors.$white;
  background-color: colors.$blue;
  padding-block: clamp(1rem, 5vw, 4rem);

  &__container {
    display: flex;
    align-items: center;
    gap: clamp(1.5rem, 5vw, 2rem);
  }

  &__icon {
    @media (min-width: calc(25rem + 1px)) {
      height: clamp(2.5rem, 5vw, 4rem);
    }
    @media (max-width: 25rem) {
      display: none;
    }
  }

  &__paragraph {
    font-size: clamp(18px, 3vw, 24px);
    line-height: 1.35;
  }
}
</style>
