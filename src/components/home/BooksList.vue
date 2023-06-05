<template>
<div class="newest-books-list">
  <book-card
    v-for="(card, idx) in booksList"
    :key="idx"
    :book="card"
  />
</div>
</template>

<script>
import BookCard from '../BookCard.vue';

export const BOOKS_LIST = [
  {
    id: 1,
    title: 'Jujutsu Kaisen',
    img: 'https://upload.wikimedia.org/wikipedia/ru/d/d2/Jujutsu_Kaisen.jpg',
    tags: ['Action', 'Shounen', 'Fantasy', 'Mystic'],
  },
  {
    id: 2,
    title: 'Naruto',
    description: 'Сёнэн-манга Масаси Кисимото, рассказывающая о жизни шумного и непоседливого ниндзя-подростка Наруто Удзумаки, мечтающего достичь всеобщего признания и стать Хокагэ - главой своего селения и сильнейшим ниндзя. Чтобы добиться уважения окружающих, ему предстоит пройти через тысячи препятствий: экзамены ниндзя, различные миссии и сражения.',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkc6QPnuf3aWq-ZAINjHSano5yx6I3kedkxw&usqp=CAU',
    tags: ['Martial arts', 'Adventure', 'Fantasy'],
    download: `/assets/naruto.pdf`,
  },
  {
    id: 3,
    title: 'Attack on Titan',
    img: 'https://m.media-amazon.com/images/M/MV5BMTY5ODk1NzUyMl5BMl5BanBnXkFtZTgwMjUyNzEyMTE@._V1_FMjpg_UX1000_.jpg',
    tags: ['Action', 'Drama', 'Dark fantasy'],
  },
  {
    id: 4,
    title: 'Seven Deadly Sins',
    img: 'https://citaty.info/files/posters/14713.jpg',
    tags: ['Adventure fiction'],
  },
  {
    id: 5,
    title: 'Мартин Иден',
    img: 'https://media.newyorker.com/photos/5f8773d3b3351a3acb585152/master/w_2560%2Cc_limit/201026_r37249.jpg',
    tags: ['Künstlerroman', 'Роман'],
  },
  {
    id: 6,
    title: 'Jujutsu Kaisen',
    img: 'https://upload.wikimedia.org/wikipedia/ru/d/d2/Jujutsu_Kaisen.jpg',
    tags: ['Action', 'Shounen', 'Fantasy', 'Mystic'],
  },
  {
    id: 7,
    title: 'Naruto',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkc6QPnuf3aWq-ZAINjHSano5yx6I3kedkxw&usqp=CAU',
    tags: ['Martial arts', 'Adventure', 'Fantasy'],
  },
  {
    id: 8,
    title: 'Attack on Titan',
    img: 'https://m.media-amazon.com/images/M/MV5BMTY5ODk1NzUyMl5BMl5BanBnXkFtZTgwMjUyNzEyMTE@._V1_FMjpg_UX1000_.jpg',
    tags: ['Action', 'Drama', 'Dark fantasy'],
  },
  {
    id: 9,
    title: 'Seven Deadly Sins',
    img: 'https://citaty.info/files/posters/14713.jpg',
    tags: ['Adventure fiction'],
  },
  {
    id: 10,
    title: 'Мартин Иден',
    img: 'https://media.newyorker.com/photos/5f8773d3b3351a3acb585152/master/w_2560%2Cc_limit/201026_r37249.jpg',
    tags: ['Künstlerroman', 'Роман'],
  },
];

export default {
  name: 'NewestBooksList',

  components: {
    BookCard,
  },

  props: {
    limit: {
      type: Number,
      default: 0,
    },
    filterName: {
      type: String,
      default: '',
    },
  },

  data: () => ({
    books: BOOKS_LIST,
  }),

  computed: {
    booksList() {
      const tempBooks = this.filterName
        ? this.books.filter(({ title }) => title.toLowerCase().includes(this.filterName.toLowerCase()))
        : this.books;
      return this.limit > 0
        ? tempBooks.slice(0, this.limit)
        : tempBooks;
    },
  }
};
</script>

<style lang="scss" scoped>
.newest-books-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 16px;
  row-gap: 32px;
}
</style>
