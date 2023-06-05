<template>
<div class="auth-container">
  <div class="auth-container__heading">
    {{ isLogin ? 'Вход' : 'Регистрация' }}
  </div>
  <app-divider divideSpace="24px"/>
  <login-form v-if="isLogin"/>
  <registration-form v-else/>
</div>
</template>

<script>
import { isAuth } from '@/helpers/auth';
import AppDivider from '../AppDivider.vue';
import LoginForm from './LoginForm.vue';
import RegistrationForm from './RegistrationForm.vue';
export const REGISTER_TYPE_FLAG = 'register';

export default {
  name: 'AuthContainer',

  components: {
    AppDivider,
    RegistrationForm,
    LoginForm,
  },

  data: () => ({
    isLogin: true,
  }),

  watch: {
    '$route.query': {
      handler(v) {
        console.log(v);
        const { type } = v;

        this.isLogin = !(type && type === REGISTER_TYPE_FLAG);
      },
      deep: true,
      immediate: true,
    },
  },

  created() {
    if (isAuth()) {
      this.$router.push('/');
    }
  },
};
</script>

<style lang="scss" scoped>
.auth-container {
  box-sizing: border-box;
  width: 360px;
  padding: 32px;

  border-radius: 32px;
  background: var(--color-control-background);

  &__heading {
    text-align: center;
    font-size: 24px;
    font-weight: 200;
  }
}
</style>