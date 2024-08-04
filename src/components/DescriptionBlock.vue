<template>
  <section class="description container">
    <iframe
      class="description__video"
      src="https://www.youtube.com/embed/C8PUlZrngZQ"
      title="Artisan Sourdough Bread Process from Start to Finish | Proof Bread"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    />
    <div class="description__text">
      <div class="description__count">
        <div class="description__count-number">
          167
        </div>
        <div class="description__count-text">
          лет нашего опыта
        </div>
      </div>
      <p class="description__paragraph">
        DuffBeer — один из мировых лидеров по производству дрожжей и других продуктов ферментации.
        И нам нужна сильная команда профессионалов и единомышленников,
        которые будут стремитьсяразвиваться вместе с DuffBeer.
      </p>
      <p class="description__paragraph">
        Мы всегда рады принять талантливых и целеустремленных людей в нашу дружную команду!
        Мы ценим каждого своего сотрудника и стремимся предоставить
        всем равные возможности в развитии и совершенств.
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@vars/breakpoints' as *;
@use '@vars/colors';

.description {
  display: flex;
  flex-wrap: wrap-reverse;
  align-items: flex-end;
  justify-content: center;
  gap: 40px;

  @media (min-width: calc($tablet + 1px)) {
    padding-block: 100px;
  }
  @media (max-width: $tablet) and (min-width: calc($mobile + 1px)) {
    padding-block: 80px;
  }
  @media (max-width: $mobile) {
    padding-block: 60px;
  }

  &__video,
  &__text {
    flex: 1 1 400px;
  }

  &__video {
    $margin: 35px;

    aspect-ratio: 16 / 9;
    margin-top: $margin;
    box-shadow: calc(0px - $margin) calc(0px - $margin) 0 0 colors.$beige;

    @media (max-width: $mobile) {
      margin-left: $margin;
    }
  }

  &__text {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  &__count {
    display: flex;
    flex-direction: column;
    @media (min-width: calc($mobile + 1px)) {
      gap: 20px;
    }
    @media (max-width: $mobile) {
      gap: 12px;
    }

    &-number {
      color: colors.$brown;
      font-weight: 900;
      line-height: 1;

      @media (min-width: calc($mobile + 1px)) {
        font-size: 96px;
      }
      @media (max-width: $mobile) {
        font-size: 42px;
      }
    }

    &-text {
      color: colors.$blue;
      font-weight: 700;
      text-transform: uppercase;
      margin-bottom: 12px;

      @media (min-width: calc($mobile + 1px)) {
        font-size: 18px;
      }
      @media (max-width: $mobile) {
        font-size: 12px;
      }
    }
  }

  &__paragraph {
    color: colors.$brown-dark;
    font-size: 18px;
    line-height: 30px;
  }
}
</style>
