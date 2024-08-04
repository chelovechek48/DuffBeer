<template>
  <section class="about container">
    <iframe
      class="about__video about__group"
      src="https://www.youtube.com/embed/C8PUlZrngZQ"
      title="Процесс приготовления хлеба на закваске"
      frameborder="0"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    />
    <div class="about__text about__group">
      <div class="about__count">
        <span class="about__count-number">
          167
        </span>
        <span class="about__count-label">
          лет нашего опыта
        </span>
      </div>
      <p class="about__paragraph">
        DuffBeer — один из мировых лидеров по производству дрожжей и других продуктов ферментации.
        И нам нужна сильная команда профессионалов и единомышленников,
        которые будут стремитьсяразвиваться вместе с DuffBeer.
      </p>
      <p class="about__paragraph">
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

.about {
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap-reverse;
  gap: clamp(24px, 4vw, 40px);

  padding-block: clamp(4rem, 7vw, 6rem);

  &__group {
    flex: 1 1 25rem;
  }

  &__video {
    $margin: clamp(1rem, 4vw, 2rem);

    width: 100%;
    aspect-ratio: 16 / 9;
    box-shadow: calc(0px - $margin) calc(0px - $margin) 0 0 colors.$beige;
    margin-top: $margin;
  }

  &__text {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  &__count {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    gap: 0.75rem;

    &-number {
      color: colors.$brown;
      font-size: clamp(42px, 6.5vw, 96px);
      font-weight: 900;
      line-height: 0.9;
    }

    &-label {
      color: colors.$blue;
      font-size: clamp(16px, 7vw, 24px);
      font-weight: 700;
      line-height: 1;

      text-transform: uppercase;
      white-space: nowrap;
    }
  }

  &__paragraph {
    color: colors.$brown-dark;
    font-size: 18px;
    line-height: 1.6;
  }
}
</style>
