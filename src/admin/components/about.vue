<template lang="pug">
  .blog
    h1.title Страница "Обо мне"
    h2.subtitle Мои скилы
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
