<template>
<div class="auth-wrapper">
  <auth-container/>
</div>
</template>

<script>
import AuthContainer from '@/components/auth/AuthContainer.vue';
export default {
  name: 'AuthView',

  components: {
    AuthContainer,
  },
};
</script>

<style lang="scss" scoped>
.auth-wrapper {
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
