<template>
<div class="newest-books-list">
  <book-card
    v-for="(card, idx) in books"
    :key="idx"
    :title="card.title"
    :img="card.img"
    :tags="card.tags"
  />
</div>
</template>

<script>
import BookCard from '../BookCard.vue';

const BOOKS_LIST = [
  {
    title: 'Jujutsu Kaisen',
    img: 'https://upload.wikimedia.org/wikipedia/ru/d/d2/Jujutsu_Kaisen.jpg',
    tags: ['Action', 'Shounen', 'Fantasy', 'Mystic'],
  },
  {
    title: 'Naruto',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkc6QPnuf3aWq-ZAINjHSano5yx6I3kedkxw&usqp=CAU',
    tags: ['Martial arts', 'Adventure', 'Fantasy'],
  },
  {
    title: 'Attack on Titan',
    img: 'https://m.media-amazon.com/images/M/MV5BMTY5ODk1NzUyMl5BMl5BanBnXkFtZTgwMjUyNzEyMTE@._V1_FMjpg_UX1000_.jpg',
    tags: ['Action', 'Drama', 'Dark fantasy'],
  },
  {
    title: 'Seven Deadly Sins',
    img: 'https://citaty.info/files/posters/14713.jpg',
    tags: ['Adventure fiction'],
  },
];

export default {
  name: 'NewestBooksList',

  components: {
    BookCard,
  },

  data: () => ({
    books: BOOKS_LIST,
  }),
};
</script>

<style lang="scss" scoped>
.newest-books-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
}
</style>
