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
          to="/"
        >
          <underline-wrapper>Книги</underline-wrapper>
        </router-link>
        <router-link
          to="/"
        >
          <underline-wrapper>О нас</underline-wrapper>
        </router-link>
        <app-button outlined class="the-header__login-btn"> Войти </app-button>
        <app-button> Зарегистрироваться </app-button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import TheLogo from './TheLogo.vue';
import AppButton from '@/components/controls/AppButton.vue';
import UnderlineWrapper from '@/components/controls/UnderlineWrapper.vue';

export default {
  components: {
    TheLogo,
    UnderlineWrapper,
    UnderlineWrapper,
    AppButton,
  },
}
</script>

<style lang="scss" scoped>
.the-header {
  &__container {
    position: sticky;
    top: 0;
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