<template>
  <header class="hero">
    <div class="hero__container container">
      <img
        class="hero__logo"
        src="@icons/logo.svg"
        alt="Надпись logoipsum на синем фоне"
      >
      <span class="hero__company-name">
        Conecom
      </span>
      <h1 class="hero__text">
        российское подразделение французской группы DuffBeer
      </h1>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use '@vars/functions' as *;
@use '@vars/breakpoints' as *;
@use '@vars/colors';

.hero {
  color: colors.$white;
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
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;

    @media (min-width: calc($mobile + 1px)) {
      height: pxToRem(600);
    }
    @media (max-width: $mobile) {
      height: pxToRem(315);
      text-align: center;
      align-items: center;
    }
  }

  &__logo {
    position: absolute;
    top: 0;
    @media (min-width: calc($mobile + 1px)) {
      width: 267px;
      left: 60px;
    }
    @media (max-width: $mobile) {
      width: 167px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &__company-name {
    text-transform: uppercase;
    @media (min-width: calc($mobile + 1px)) {
      font-size: 72px;
    }
    @media (max-width: $mobile) {
      font-size: clamp(24px, 7vw, 36px);
    }
  }

  &__text {
    @media (min-width: calc($mobile + 1px)) {
      font-size: 26px;
      line-height: 36px;
      max-width: 550px;
    }
    @media (max-width: $mobile) {
      font-size: 16px;
      line-height: 20px;
      max-width: 350px;
    }
  }
}
</style>
