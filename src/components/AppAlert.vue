<template>
<div class="app-alert">
  {{ content }}
  <svg-icon v-if="icon" type="mdi" :path="icon"/>
</div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';

export default {
  name: 'InfoCard',

  props: {
    content: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
  },

  components: {
    SvgIcon,
  },
}
</script>

<style lang="scss" scoped>
.app-alert {
  padding: 16px;
  background: var(--color-control-background);
  border-radius: 16px;

  display: flex;
  gap: 8px;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;

  text-align: justify;

  transition: all .2s;
  &:hover {
    transform: scale(1.03);

    box-shadow: 2px 2px 10px rgba(0, 0, 0, .12);
  }
}
</style>