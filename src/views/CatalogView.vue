<template>
<div>
  <h2 class="section-heading">Каталог Библиофонд.</h2>
  <search-field-block/>
  <books-list/>
</div>
</template>

<script>
import BooksList from '@/components/home/BooksList.vue';
import SearchFieldBlock from '@/components/catalog/SearchFieldBlock.vue';
export default {
  name: 'CatalogView',

  components: {
    BooksList,
    SearchFieldBlock,
  },
};
</script>

<style lang="scss" scoped>
</style>
