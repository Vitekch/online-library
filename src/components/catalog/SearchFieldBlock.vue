<template>
<div class="search-block">
  <app-input class="search-block__input" v-model="searchValue"/>
  <app-button
    class="search-block__button"
    @click="$emit('search-init', searchValue)"
  >Поиск по названию</app-button>
</div>
</template>

<script>
import AppButton from '../controls/AppButton.vue';
import AppInput from '../inputs/AppInput.vue';

export default {
  name: 'SearchFieldBlock',

  components: {
    AppButton,
    AppInput,
  },

  data: () => ({
    searchValue: '',
  }),
}
</script>

<style lang="scss" scoped>
.search-block {
  position: sticky;
  top: 20px;
  padding: 16px;
  margin: 64px 0;

  padding-right: 164px;
  display: flex;
  align-items: center;
  background: var(--color-control-background);
  border-radius: 16px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, .12);

  z-index: 4;
  &__input {
    width: 100%;
  }
  &__button {
    position: absolute;
    right: -20px;
  }
}
</style>
