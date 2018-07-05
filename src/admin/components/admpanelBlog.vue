<template lang="pug">
  .blog
    h1.title Страница "Блог"
    h2.subtitle Добавить запись
    form.form
      input(placeholder="Название").input
      input(placeholder="Дата").input
      textarea(placeholder="Содержание").textarea
      button.button.button--info Добавить
</template>
