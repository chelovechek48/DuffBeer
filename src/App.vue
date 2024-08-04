<template>
  <div class="page">
    <HeroBlock />
    <AboutBlock />
    <FactBlock />
  </div>
</template>

<style lang="scss">
@use '@vars/functions' as *;
@use '@vars/breakpoints' as *;
@import '@styles';

.container {
  max-width: pxToRem(1250);
  margin: 0 auto;

  @media (min-width: calc($tablet + 1px)) {
    padding-inline: 60px;
  }
  @media (max-width: $tablet) and (min-width: calc($mobile + 1px)) {
    padding-inline: 40px;
  }
  @media (max-width: $mobile) {
    padding-inline: 20px;
  }
}
</style>

<style lang="scss" scoped>
.page {
  padding: 15px;
}
</style>
