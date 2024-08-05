<template>
  <header class="hero">
    <div class="hero__container container">
      <img
        class="hero__logo"
        src="@icons/logo.svg"
        alt="Надпись logoipsum на синем фоне"
      >
      <div class="hero__text">
        <span class="hero__text-name">
          Conecom
        </span>
        <h1 class="hero__text-description">
          российское подразделение французской группы DuffBeer
        </h1>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use '@vars/functions' as *;
@use '@vars/breakpoints' as *;
@use '@vars/colors';

.hero {
  background-color: colors.$brown;
  background-image: url('@images/hero@1x.jpg');
  background-image: image-set(
    url('@images/hero@1x.avif') type('image/avif'),
    url('@images/hero@1x.webp') type('image/webp'),
    url('@images/hero@1x.jpg') type('image/jpg')
  );
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;

  &__container {
    min-height: clamp(pxToRem(315), 65vw, pxToRem(600));

    display: flex;
    flex-direction: column;

    @media (min-width: calc($mobile + 1px)) {
      align-items: flex-start;
    }
    @media (max-width: $mobile) {
      text-align: center;
      align-items: center;
    }
  }

  $logo-height: clamp(4rem, 12vw, 6.5rem);

  &__logo {
    height: $logo-height;
  }

  &__text {
    color: colors.$white;
    line-height: 1.35;

    max-width: clamp(20rem, 60vw, 35rem);
    padding-bottom: $logo-height;
    margin-block: auto;

    display: grid;
    gap: 1rem;

    &-name {
      font-size: clamp(1.5rem, 7vw, 4.5rem);
      text-transform: uppercase;
    }

    &-description {
      font-size: clamp(1rem, 3.5vw, pxToRem(26));
    }
  }
}
</style>
