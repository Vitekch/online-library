<template>
<div id="app-container">
  <the-header />
  <slot></slot>
</div>
</template>

<script>
import TheHeader from '@/components/layout/TheHeader/TheHeader.vue';
export default {
  name: 'DefaultLayout',

  components: {
    TheHeader,
  },
};
</script>

<style lang="scss">
#app-container {
  height: 100vh;
  background: var(--color-background);
}
</style>