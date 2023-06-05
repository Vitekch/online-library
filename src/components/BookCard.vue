<template>
<div class="book-card__wrapper">
  <div class="book-card">
    <div
      class="book-card__front"
      :style="`background-image: url(${book.img})`"
    ></div>
    <div class="book-card__additional">
      <app-button :to="`/catalog/${book.id}`">Подробнее</app-button>
      <div class="book-card__additional__tags">
        <app-chip
          v-for="(tag, idx) in book.tags"
          :key="idx"
          outlined
        >{{ tag }}</app-chip>
      </div>
    </div>
  </div>
  <div class="book-card__title">{{ book.title }}</div>
</div>
</template>

<script>
import AppButton from './controls/AppButton.vue';
import AppChip from './controls/AppChip.vue';

export default {
  name: 'BookCard',

  components: {
    AppButton,
    AppChip,
  },

  props: {
    book: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.book-card {
  border-radius: 32px;
  overflow: hidden;
  position: relative;

  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }
  &__front {
    width: 230px;
    height: 340px;
    padding: 32px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  &__additional {
    width: 101%;
    height: 101%;
    position: absolute;
    padding: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    gap: 32px;
    top: 100%;
    left: 0;
    background: var(--color-control-background);
    z-index: 2;
    transition: all .2s;
    &__tags {
      display: flex;
      justify-content: center;
      gap: 8px;
      flex-wrap: wrap;
    }
  }
  &:hover > &__additional {
    top: 0;
  }
  &__title {
    margin: 0 auto;
    padding: 16px;
    position: absolute;
    top: -20px;

    border: 10px solid var(--color-background);
    border-radius: 32px;

    font-size: 18px;
    color: white;
    background: var(--color-primary);
    
    z-index: 3;
  }
}
</style>