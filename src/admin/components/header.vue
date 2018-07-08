<template lang="pug">
  .header
    h1.header__title Панель администрирования
    a(href="#").header__link Вернуться на сайт
</template>
<style lang="scss" scoped>
.header {
  width: 100%;
  height: 81px;
  font-family: "Roboto", Helvetica, sans-serif;
  background-color: #0548be;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  &__title {
    color: #ffffff;
    font-size: 21px;
    font-weight: 500;
  }

  &__link {
    color: #b4c8ec;
  }
}
</style>
