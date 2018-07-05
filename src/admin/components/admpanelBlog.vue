<template lang="pug">
  .blog
    h1.title Страница "Блог"
    h2.subtitle Добавить запись
    form.form
      input(placeholder="Название" name="post-name" id="post-name" v-model="postData.title").input
      input(placeholder="Дата" name="post-date" id="post-date" v-model="postData.date").input
      textarea(placeholder="Содержание" name="post-content" id="post-content" v-model="postData.content").textarea
      button(@click.prevent="addPost").button.button--info Добавить
</template>

<script>
export default {
  data() {
    return {
      postData: {
        title: "",
        date: "",
        content: ""
      }
    };
  },
  methods: {
    addPost() {
      console.log("Add post!");
    }
  }
};
</script>
