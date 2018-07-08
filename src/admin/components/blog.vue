<template lang="pug">
  .blog
    h1.title Страница "Блог"
    table.admin-table.posts-list
      //- tr.table-header 
      //-   th Название статьи
      //-   th Дата
      post-item(
        v-for="post in posts" 
        :key="post.id"
        :post="post"
        )
    router-link(to="/addpost").button.button--info Добавить статью
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import postItem from "./postItem";

export default {
  components: {
    postItem
  },
  computed: {
    ...mapState({
      posts: state => state.posts.data
    })
  },
  created() {
    this.fetchPosts();
  },
  methods: {
    ...mapActions(["fetchPosts"])
  }
};
</script>
