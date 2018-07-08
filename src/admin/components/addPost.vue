<template lang="pug">
  .blog
    h1.title Страница "Блог"
    h2.subtitle Добавить запись
    form.form
      input(placeholder="Название" name="post-name" id="post-name" v-model="post.title").input
      input(placeholder="Дата" name="post-date" id="post-date" v-model="post.date").input
      textarea(placeholder="Содержание" name="post-content" id="post-content" v-model="post.content").textarea
      button(@click.prevent="addPost").button.button--info Добавить
      router-link(to="/blog") Вернуться к списку статей
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
    ...mapActions(["addNewPost"]),
    async addPost() {
      console.log("Add post!");
      const addedPost = await this.addNewPost(this.post);
      this.post.title = "";
      this.post.date = "";
      this.post.content = "";
    }
  }
};
</script>
