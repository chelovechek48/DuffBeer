<template>
  <aside class="fact">
    <div class="container">
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

  @media (min-width: calc($mobile + 1px)) {
    padding-block: 94px;
  }
  @media (max-width: $mobile) {
    padding-block: 32px;
  }

  &__container {
    display: flex;
    gap: 38px;
  }

  &__paragraph {
    background-image: url(@icons/arrow.svg);
    background-repeat: no-repeat;

    @media (min-width: calc($mobile + 1px)) {
      font-size: 24px;
      line-height: 32px;
      background-size: 50px auto;
      padding-left: calc(50px + 40px);
    }
    @media (max-width: $mobile) {
      font-size: 16px;
      line-height: 20px;
      background-size: 20px auto;
      padding-left: calc(20px + 30px);
    }
  }
}
</style>
