<template lang="pug">
  tr.posts-item
    td {{post.title}}
    //- td {{post.date}}
    td {{stringDate()}}
    //- td {{ dataView() }}
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
  // computed: {
  //   stringDate: () => {
  //     return this.$props.post.date;
  //   }
  // },
  methods: {
    ...mapActions(["removeExistedPost"]),
    stringDate() {
      const date = new Date(this.post.date * 1000);
      const year = date.getFullYear();
      const month = zeroFill(date.getMonth() + 1, 2);
      const day = zeroFill(date.getDate(), 2);
      return `${day}.${month}.${year}`;

      function zeroFill(num, len) {
        return (Array(len).join("0") + num).slice(-len);
      }
    },
    removeItem() {
      this.removeExistedPost(this.post.id);
    }
  }
};
</script>
