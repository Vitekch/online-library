<template>
<div class="info-card">
  <div class="info-card__header">
    {{ label }}
    <svg-icon v-if="icon" type="mdi" :path="icon"/>
  </div>
  <div class="info-card__content"> {{ content }}</div>
</div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';

export default {
  name: 'InfoCard',

  props: {
    label: {
      type: String,
      default: '',
    },
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
.info-card {
  width: 230px;
  padding: 32px;
  background: var(--color-control-background);
  border-radius: 32px;

  transition: all .2s;
  &:hover {
    transform: scale(1.03);

    box-shadow: 2px 2px 10px rgba(0, 0, 0, .12);
  }
  &__header {
    margin-bottom: 32px;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
  }
  &__content {
    text-align: justify;
  }
}
</style>