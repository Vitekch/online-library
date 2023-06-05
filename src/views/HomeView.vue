<template>
  <div class="home">
    <cards-group/>
    <app-divider/>
    <h2 class="section-heading">Новое на Библиофонд.</h2>
    <books-list :limit="4"/>
  </div>
</template>

<script>
// @ is an alias to /src
import CardsGroup from '@/components/home/CardsGroup.vue';
import AppDivider from '@/components/AppDivider.vue';
import BooksList from '@/components/home/BooksList.vue';

export default {
  name: 'HomeView',

  components: {
    CardsGroup,
    AppDivider,
    BooksList,
  },
}
</script>

<style lang="scss" scoped>
.cards-section {
  margin-top: 64px;
}
</style>