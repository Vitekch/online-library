<template>
  <div class="home">
    <cards-group/>
    <app-divider/>
    <newest-books-list/>
  </div>
</template>

<script>
// @ is an alias to /src
import CardsGroup from '@/components/home/CardsGroup.vue';
import AppDivider from '@/components/AppDivider.vue';
import NewestBooksList from '@/components/home/NewestBooksList.vue';

export default {
  name: 'HomeView',

  components: {
    CardsGroup,
    AppDivider,
    NewestBooksList,
  },
}
</script>

<style lang="scss" scoped>
.cards-section {
  margin-top: 64px;
}
</style>