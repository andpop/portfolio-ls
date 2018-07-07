<template lang="pug">
  .blog
    h1.title Страница "Блог"
    h2.subtitle Добавить запись
    form.form
      input(placeholder="Название" name="post-name" id="post-name" v-model="post.title").input
      input(placeholder="Дата" name="post-date" id="post-date" v-model="post.date").input
      textarea(placeholder="Содержание" name="post-content" id="post-content" v-model="post.content").textarea
      button(@click.prevent="addNewPost").button.button--info Добавить
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      post: {
        title: "",
        date: "",
        content: ""
      }
    };
  },
  methods: {
    ...mapActions(["addPost"]),
    addNewPost() {
      console.log("Add post!");
      this.addPost(this.post);
    }
  }
};
</script>
