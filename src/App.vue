<template>
  <div id="app">
    <default-layout>
      <router-view/>
    </default-layout>
  </div>
</template>

<script>
import DefaultLayout from '@/layouts/default.vue';

export default {
  components: {
    DefaultLayout,
  },
};
</script>

<style lang="scss" src="@/styles/global.scss">
</style>
