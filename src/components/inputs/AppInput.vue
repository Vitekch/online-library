<template>
<div class="app-input__container">
  <div v-if="label" class="app-input__label-wrapper"></div>
  <input
    v-model="inputValue"
    class="app-input"
    v-bind="$attrs"
  />
  <div v-if="label" class="app-input__label">{{ label }}</div>
</div>
</template>

<script>
export default {
  name: 'AppInput',

  props: {
    value: {
      type: String,
      default: '',
    },

    label: {
      type: String,
      default: '',
    },
  },

  computed: {
    inputValue: {
      get() {
        return this.value;
      },
      set(v) {
        this.$emit('input', v);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.app-input {
  box-sizing: border-box;
  height: 40px;
  width: 100%;
  padding: 16px;
  outline: 1px solid var(--color-secondary);

  background: var(--color-control-background);
  border: none;
  border-radius: 16px;

  transition: all .2s;
  &:focus {
    outline: 1px solid var(--color-primary);
  }

  &__container {
    position: relative;
  }
  &__label-wrapper {
    height: 16px;
  }
  &__label {
    padding: 0 4px;
    position: absolute;
    top: 8px;
    left: 8px;
    font-size: 12px;
    font-weight: 600;
    background: var(--color-control-background);
    transition: all .2s;
  }

  &:focus + &__label {
    color: var(--color-primary);
  }
}
</style>
