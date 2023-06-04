<template>
<div
  class="the-logo__container"
  :class="{ hovered }"
  @mouseenter="hovered = true"
  @mouseleave="hovered = false"
>
  <div class="the-logo__lythers">
    {{ hovered ? full : mini }}
  </div>
</div>
</template>

<script>
export default {
  name: 'TheLogo',

  data: () => ({
    mini: 'бф.',
    full: 'библиофонд.',

    hovered: false,
  })
}
</script>

<style lang="scss" scoped>
.the-logo {
  &__container {
    height: 48px;
    width: 48px;
    padding: 24px;

    display: flex;
    justify-content: center;
    align-items: center;

    border: 10px solid var(--color-background);
    border-radius: 88px;
    background: var(--color-primary-darken);

    transition: all .2s;

    &::before {
      content: "";
      position: absolute;
      height: 30px;
      left: -37px;
      top: 24px;
      width: 30px;
      box-shadow: 0 10px 0 0 var(--color-background);
      border-bottom-right-radius: 20px;
      background: transparent;
    }

    &::after {
      content: "";
      position: absolute;
      height: 30px;
      right: -37px;
      top: 24px;
      width: 30px;
      box-shadow: 0 10px 0 0 var(--color-background);
      border-bottom-right-radius: 20px;
      background: transparent;

      transform: scaleX(-1);
    }

    &.hovered {
      width: 200px;
    }
  }

  &__lythers {
    color: var(--color-control-background);

    font-size: 24px;
    font-weight: 200;

    letter-spacing: 2px;
  }
}
</style>