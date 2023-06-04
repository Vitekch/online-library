<template>
  <button
    class="app-button"
    :class="{ outlined }"
    @click="$emit('click', $event)"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'AppButton',

  props: {
    outlined: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss">
.app-button {
  height: 32px;
  padding: 12px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: white;
  background-color: var(--color-primary);
  border: 1px solid var(--color-primary);
  border-radius: 16px;

  cursor: pointer;

  transition: all .2s;
  &:hover {
    background-color: var(--color-primary-lighten);
    color: var(--color-primary-darken);
  }
  &:active {
    transform: scale(.98);
  }
  &.outlined {
    color: var(--color-primary);
    background-color: transparent !important;
    &:hover {
      background-color: var(--color-primary-lighten) !important;
      color: var(--color-primary-darken);
    }
  }
}
</style>