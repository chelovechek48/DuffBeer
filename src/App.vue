<template>
  <div class="page">
    <HeroBlock />
    <AboutBlock />
    <FactBlock />
    <MissionBlock />
    <FeaturesBlock />
  </div>
</template>

<style lang="scss">
@use '@vars/functions' as *;
@use '@vars/breakpoints' as *;
@import '@styles';

.container {
  max-width: pxToRem(1250);
  padding-inline: clamp(1.25rem, 5vw, 3.75rem);
  margin: 0 auto;
}
</style>

<style lang="scss" scoped>
@use '@vars/breakpoints' as *;

.page {
  @media (min-width: calc($mobile + 1px)) {
    padding: 1rem;
  }
}
</style>
