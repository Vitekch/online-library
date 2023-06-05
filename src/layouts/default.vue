<template>
<div id="app-container">
  <the-header />
  <div class="container">
    <slot></slot>
  </div>
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
  min-height: 100vh;
  padding-bottom: 16px;
  background: var(--color-background);

  & > .container {
    margin-top: 104px;
  }
}
</style>