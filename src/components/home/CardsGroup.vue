<template>
<div class="cards-wrapper">
  <info-card
    v-for="(card, idx) in cards"
    :key="idx"
    :label="card.label"
    :content="card.content"
    :icon="card.icon"
    />
</div>
</template>

<script>
import InfoCard from './InfoCard.vue'
import {
  mdiBookOpenVariant,
  mdiLibraryShelves,
  mdiMagnify,
  mdiMonitorArrowDownVariant,
} from '@mdi/js';

export default {
  name: 'CardsGroup',

  components: {
    InfoCard,
  },

  computed: {
    cards() {
      return [
        {
          label: 'Наш каталог книг',
          content: 'Мы собираем коллекцию книг лучших авторов и храним для вас!',
          icon: mdiLibraryShelves,
        },
        {
          label: 'Поиск',
          content: 'При помощи поиска вы можете найти нужную вам литературу.',
          icon: mdiMagnify,
        },
        {
          label: 'Скачивайте',
          content: 'После выбора нужной книги - вы можете скачать её',
          icon: mdiMonitorArrowDownVariant,
        },
        {
          label: 'Приятного чтения!',
          content: 'Открывайте книгу в удобном для вас приложении и читайте с удовольствием!',
          icon: mdiBookOpenVariant,
        },
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
.cards-wrapper {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}
</style>
