<template>
<div
  class="underline-wrapper"
  @mouseenter="hovered = true"
  @mouseleave="hovered = false"
>
  <slot></slot>
  <div
    class="underline-wrapper__line"
    :class="{ hovered }"
  ></div>
</div>
</template>

<script>
export default {
  name: 'UnderlineWrapper',

  data: () => ({
    hovered: false,
  })
}
</script>

<style lang="scss" scoped>
.underline-wrapper {
  position: relative;
  transition: all .2s;
  &:hover {
    color: var(--color-primary);
  }
  &__line {
    margin-top: 4px;
    height: 1px;
    width: 0;

    background: var(--color-primary);
    transition: all .2s;
    &.hovered {
      width: 100%;
    }
  }
}
</style>