<template>
<div class="form-wrapper">
  <app-input v-model="form.login" label="Имя пользователя"/>
  <app-input v-model="form.email" label="Электронная почта" type="email"/>
  <app-input v-model="form.password" label="Пароль" type="password"/>
  <app-input v-model="form.confirmPassword" label="Повторите пароль" type="password"/>
  <div class="form-message">
    Уже зарегестрированы?
    <router-link
      to="/auth"
    >
      <underline-wrapper>Войти</underline-wrapper>
    </router-link>
  </div>
  <app-button>Зарегистрироваться</app-button>
</div>
</template>

<script>
import AppInput from '@/components/inputs/AppInput.vue';
import AppButton from '../controls/AppButton.vue';
import UnderlineWrapper from '../controls/UnderlineWrapper.vue';

export default {
  name: 'LoginForm',

  components: {
    AppInput,
    AppButton,
    UnderlineWrapper,
  },

  data: () => ({
    form: {
      login: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  }),
  
};
</script>

<style lang="scss" scoped>
.form-wrapper {
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 32px;
}
.form-message {
  display: flex;
  gap: 8px;
  font-size: 12px;
}
</style>
