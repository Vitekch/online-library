<template>
  <div
    class="app-chip"
    :class="{ outlined }"
    @click="$emit('click', $event)"
  >
    <slot></slot>
</div>
</template>

<script>
export default {
  name: 'AppChip',

  props: {
    outlined: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.app-chip {
  height: 18px;
  padding: 12px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 12px;
  box-sizing: border-box;
  color: white;
  background-color: var(--color-additional);
  border: 1px solid var(--color-additional);
  border-radius: 16px;

  transition: all .2s;
  &:hover {
    background-color: var(--color-additional-lighten);
    color: var(--color-additional-darken);
  }
  &:active {
    transform: scale(.98);
  }
  &.outlined {
    color: var(--color-additional);
    background-color: transparent !important;
    &:hover {
      background-color: var(--color-additional-lighten) !important;
      color: white;
    }
  }
}
</style>