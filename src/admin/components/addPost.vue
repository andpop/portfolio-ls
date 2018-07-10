<template lang="pug">
  .blog
    h1.title Страница "Блог"
    h2.subtitle Добавить запись
    form.form
      input(placeholder="Название" name="post-name" id="post-name" v-model="post.title").input
      input(type="date" placeholder="Дата" name="post-date" id="post-date" v-model="post.date").input
      textarea(placeholder="Содержание" name="post-content" id="post-content" v-model="post.content").textarea
      .buttons-container
        ul.buttons-list
          li.buttons-item
            button(@click.prevent="addPost").button.button--info Добавить
          li.buttons-item
            router-link(to="/blog").button.button--info Вернуться к списку статей
      .popup(v-if="isShowPopup")
        .popup__container
          .popup__content
            p.popup__message {{popupMessage}}
            button(@click.prevent="isShowPopup = false;").button.button--info Закрыть
      
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
      },
      isShowPopup: false,
      popupMessage: ""
    };
  },
  methods: {
    ...mapActions(["addNewPost"]),
    async addPost() {
      const addedPost = await this.addNewPost(this.post);
      console.log(this.$store.state.posts.requestStatus);
      if (this.$store.state.posts.requestStatus === "ok") {
        this.popupMessage = "Статья сохранена";
        // console.log("Статья сохранена");
      } else {
        this.popupMessage = "При записи на сервер произошла ошибка.";
        // console.log("При записи на сервер произошла ошибка.");
      }
      this.isShowPopup = true;
      this.post.title = "";
      this.post.date = "";
      this.post.content = "";
    }
  }
};
</script>
