<template>
<div class="the-header__container">
  <div class="container">
    <the-logo class="the-header__logo-wrap"/>
    <div class="the-header__content">
      <div class="the-header__links">
        <router-link
          to="/"
        >
          <underline-wrapper>Главная</underline-wrapper>
        </router-link>
        <router-link
          to="/catalog"
        >
          <underline-wrapper>Книги</underline-wrapper>
        </router-link>
        <router-link
          to="/about-us"
        >
          <underline-wrapper>О нас</underline-wrapper>
        </router-link>
        <template v-if="!isAuthentificated">
          <app-button outlined class="the-header__login-btn" to="/auth"> Войти </app-button>
          <app-button :to="`/auth?type=${REGISTER_TYPE_FLAG}`"> Зарегистрироваться </app-button>
        </template>
        <app-button v-else outlined class="the-header__login-btn" @click="logout"> Выйти </app-button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import TheLogo from './TheLogo.vue';
import AppButton from '@/components/controls/AppButton.vue';
import UnderlineWrapper from '@/components/controls/UnderlineWrapper.vue';

import { REGISTER_TYPE_FLAG } from '@/components/auth/AuthContainer.vue';
import { isAuth, LS_AUTH_TOKEN_KEY } from '@/helpers/auth';

export default {
  components: {
    TheLogo,
    UnderlineWrapper,
    UnderlineWrapper,
    AppButton,
  },

  data: () => ({
    REGISTER_TYPE_FLAG,
  }),

  computed: {
    isAuthentificated() {
      return isAuth();
    },
  },

  methods: {
    logout() {
      window.localStorage.removeItem(LS_AUTH_TOKEN_KEY);
      this.$router.go(0);
    },
  },
};
</script>

<style lang="scss" scoped>
.the-header {
  &__container {
    height: 88px;

    background: var(--color-control-background);
  }
  &__logo-wrap {
    position: absolute;
    top: 24px;
  }
  &__content {
    display: flex;
    align-items: center;
    width: 100%;
    height: 88px;
    padding: 16px;
    box-sizing: border-box;
  }
  &__links {
    margin-left: auto;
    display: flex;
    gap: 16px;
    font-size: 20px;
    font-weight: 200;
  }
  &__login-btn {
    margin-left: 64px;
  }
}
</style>