<template lang="pug">
  .blog
    h1.title Страница "Мои работы"
    table.works-list
      work-item(
        v-for="work in works" 
        :key="work.id"
        :work="work"
        )
    router-link(to="/addwork") Добавить работу
    //- pre {{works}}
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import workItem from "./workItem";

export default {
  components: {
    workItem
  },
  computed: {
    ...mapState({
      works: state => state.works.data
    })
  },
  created() {
    this.fetchWorks();
  },
  methods: {
    ...mapActions(["fetchWorks"])
  }
};
</script>
