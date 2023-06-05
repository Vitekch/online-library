<template>
<div>
  <h2 class="section-heading">Каталог Библиофонд.</h2>
  <div class="about-us__card">
    <p>
      Добро пожаловать в нашу электронную библиотеку! Мы рады представить вам наш сайт, где
      вы найдете множество книг, журналов и других материалов, которые помогут вам расширить
      свой кругозор и получить новые знания.
    </p>
      <p>
      Наша библиотека предлагает широкий выбор литературы на различные темы: от истории и культуры до науки и
      техники. Все материалы на нашем сайте проходят тщательную проверку и соответствуют высоким стандартам качества.
    </p>
    <p>
      Мы стремимся предоставить нашим пользователям удобный и простой в использовании интерфейс, чтобы они могли
      быстро найти нужную информацию. Кроме того, мы постоянно обновляем наш каталог новыми книгами и журналами,
      чтобы удовлетворить потребности наших читателей.
    </p>
    <p>
      Если у вас есть какие-либо вопросы или пожелания, пожалуйста, свяжитесь с нами по адресу <a href="mailto:bibliofond@mail.com">bibliofond@mail.com</a>, и мы будем рады помочь вам. 
    </p>
  </div>
</div>
</template>

<script>
export default {
  name: 'AboutUsView',
}
</script>

<style lang="scss" scoped>
.about-us {
  &__card {
    padding: 32px;

    font-size: 18px;
    line-height: 24px;
    background: var(--color-control-background);
    border-radius: 32px;

    border-left: 5px solid var(--color-primary);
    text-align: justify;

    & * a {
      color: var(--color-primary);
      text-decoration: none !important;
    }
  }
}
</style>