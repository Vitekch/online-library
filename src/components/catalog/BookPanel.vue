<template>
<div v-if="bookData" class="book-panel__wrapper">
  <div class="book-panel__image" :style="`background-image: url(${bookData.img})`"></div>
  <div>
    <div class="book-panel__title">{{ bookData.title }}</div>
    <div v-if="bookData.description" class="book-panel__description">{{ bookData.description }}</div>
  </div>
  <div class="book-panel__additional">
    <a v-if="bookData.download" :href="bookData.download" download><app-button>Скачать</app-button></a>
    <div v-if="bookData.tags.length" class="book-panel__additional__tags">
      <app-chip
        v-for="(tag, idx) in bookData.tags"
        :key="idx"
        outlined
      >{{ tag }}</app-chip>
    </div>
  </div>
</div>
</template>

<script>
import AppChip from '../controls/AppChip.vue';
import AppButton from '../controls/AppButton.vue';

import { BOOKS_LIST } from '../home/BooksList.vue';
export default {
  name: 'BookPanel',

  components: {
    AppChip,
    AppButton,
  },

  data: () => ({
    bookData: null,
  }),

  created() {
    this.getBook();
  },

  methods: {
    getBook() {
      const tempBook = BOOKS_LIST.find(({ id }) => id === Number(this.$route.params.id));
      console.log(this.$route.params.id, tempBook);
      if (tempBook) {
        this.bookData = JSON.parse(JSON.stringify(tempBook));
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.book-panel {
  &__wrapper {
    padding: 32px;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    gap: 32px;
    background: var(--color-control-background);
    border-radius: 32px;
  }

  &__image {
    height: 100%;
    min-height: 420px;
    border-radius: 32px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  &__description {
    text-align: justify;
  }

  &__title {
    margin-bottom: 32px;
    font-size: 32px;
    font-weight: 300;
  }

  &__additional {
    &__tags {
      margin-top: 24px;
      display: flex;
      flex-wrap: wrap;
      gap: 8px
    }
  }
}
</style>