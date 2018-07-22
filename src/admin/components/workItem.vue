<template lang="pug">
  tr.works-item
    td {{work.title}}
    td {{work.link}}
    td 
      button(type="button" @click="removeItem") Удалить

</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    work: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    ...mapActions(["removeExistedWork"]),
    removeItem() {
      this.removeExistedWork(this.work.id);
    }
  }
};
</script>
