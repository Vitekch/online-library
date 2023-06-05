<template>
<div class="form-wrapper">
  <app-alert v-if="error" :content="error" :icon="icons.alert"/>
  <app-input v-model="form.login" label="Имя пользователя"/>
  <app-input v-model="form.password" label="Пароль" type="password"/>
  <div class="form-message">
    Еще не зарегестрированы?
    <router-link
      :to="`/auth?type=${REGISTER_TYPE_FLAG}`"
    >
      <underline-wrapper>Регистрация</underline-wrapper>
    </router-link>
  </div>
  <app-button @click="login">Войти</app-button>
</div>
</template>

<script>
import AppInput from '@/components/inputs/AppInput.vue';
import AppButton from '../controls/AppButton.vue';
import AppAlert from '../AppAlert.vue';
import UnderlineWrapper from '../controls/UnderlineWrapper.vue';

import { REGISTER_TYPE_FLAG } from './AuthContainer.vue';
import {
  mdiAlertBoxOutline,
} from '@mdi/js';

const USERS = [
  {
    login: 'admin',
    password: '12345',
    role: 2,
  },
  {
    login: 'user',
    password: '12345',
    role: 1,
  },
];

export default {
  name: 'LoginForm',

  components: {
    AppInput,
    AppButton,
    AppAlert,
    UnderlineWrapper,
  },

  data: () => ({
    form: {
      login: '',
      password: '',
    },

    error: '',

    icons: {
      alert: mdiAlertBoxOutline,
    },

    REGISTER_TYPE_FLAG,
  }),
  
  methods: {
    login() {
      const { login, password } = this.form;

      const user = USERS.find(({ login: l, password: p }) => l === login && p === password);

      if (user) {
        window.localStorage.setItem('AUTH_TOKEN', '123123');
        window.localStorage.setItem('USER_ROLE', user.role);

        this.$router.push('/');
      } else {
        this.error = 'Неверное имя пользователя или пароль'
      }
    }
  }
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

.link {
  font-size: 14px !important;
}
</style>