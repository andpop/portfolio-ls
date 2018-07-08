<template lang="pug">
  tr.posts-item
    td {{post.id}}
    td {{post.title}}
    td {{post.date}}
    td 
      button(type="button" @click="removeItem") Удалить

</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    post: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    ...mapActions(["removeExistedPost"]),
    removeItem() {
      this.removeExistedPost(this.post.id);
    }
  }
};
</script>
