<template>
<div>
  <h2 class="section-heading">Каталог Библиофонд.</h2>
  <search-field-block @search-init="searchValue = $event"/>
  <books-list :filterName="searchValue"/>
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

  data: () => ({
    searchValue: '',
  }),
};
</script>

<style lang="scss" scoped>
</style>
