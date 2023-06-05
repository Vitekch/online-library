<template>
<div>
  <book-panel/>
</div>
</template>

<script>
import BookPanel from '@/components/catalog/BookPanel.vue';

export default {
  name: 'CatalogBookView',

  components: {
    BookPanel,
  },
}
</script>
