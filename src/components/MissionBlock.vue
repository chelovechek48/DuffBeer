<template>
  <section class="mission">
    <div class="mission__container container">
      <h2 class="mission__title">
        МИССИЯ DuffBeer
      </h2>
      <p class="mission__paragraph">
        работать вместе, что бы лучше накормить и сохранить планету
      </p>
      <button class="mission__button">
        Перейти на сайт
      </button>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@vars/colors';

.mission {
  padding-block: clamp(4rem, 7vw, 6rem);
  background-color: colors.$brown;

  color: colors.$white;
  text-align: center;

  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: clamp(1.5rem, 4vw, 2.5rem);
  }

  &__title {
    font-size: clamp(1rem, 5vw, 4rem);
    text-transform: uppercase;
    display: inline-flex;
    align-items: center;
    gap: 1rem;

    &::before,
    &::after {
      content: '';
      width: 1.5em;
      height: 0.075em;
      background-color: #fff;
    }
  }

  &__paragraph {
    font-size: clamp(1rem, 5vw, 1.5rem);
    text-transform: uppercase;
    line-height: 1.35;
  }

  &__button {
    color: colors.$blue;
    background-color: colors.$white;

    font-size: 1.5rem;
    padding:
      clamp(1rem, 4vw, 1.5rem)
      clamp(1.5rem, 8vw, 5rem);
  }
}
</style>
