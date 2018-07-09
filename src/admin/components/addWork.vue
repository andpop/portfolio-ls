<template lang="pug">
  .blog
    h1.title Страница "Мои работы"
    h2.subtitle Добавить запись
    form.form
      input(type="text" placeholder="Название проекта" name="work-name" id="work-name" v-model="work.title").input
      input(type="text" placeholder="Технологии" name="work-techs" id="work-techs" v-model="work.techs").input
      input(type="text" placeholder="Ссылка на проект" name="work-link" id="work-link" v-model="work.link").input
      input(type="file" name="work-photo" id="work-photo" @change="addPhoto").input-file
      .buttons-container
        ul.buttons-list
          li.buttons-item
            button(@click.prevent="addWork").button.button--info Добавить
          li.buttons-item
            router-link(to="/works").button.button--info Вернуться к списку работ
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      work: {
        title: "",
        techs: "",
        link: "",
        photo: ""
      }
    };
  },
  methods: {
    ...mapActions(["addNewWork"]),
    addPhoto(e) {
      const files = e.target.files;
      if (files.length === 0) return;

      this.work.photo = files[0];
    },
    async addWork() {
      // console.log("Add work!");
      const formData = new FormData();
      Object.keys(this.work).forEach(prop => {
        formData.append(prop, this.work[prop]);
      });

      const addedWork = await this.addNewWork(formData);
      this.work.title = "";
      this.work.techs = "";
      this.work.link = "";
      this.work.photo = "";
    }
  }
};
</script>
