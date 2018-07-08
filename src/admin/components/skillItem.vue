<template lang="pug">
  tr.skills-item(v-if="!editmode")
    td {{skill.title}} 
    td 
      span {{skill.percents}} %
    td 
      button(type="button" @click="removeItem") Удалить

  tr.skills-item(v-else)
    td 
      input(
        type="text" 
        placeholder="Технология"
        v-model="newSkill.title"
      )
    td
      input(
        type="number" 
        min="1"
        max="100"
        maxlength="3"
        size="3"
        v-model="newSkill.percents"
      )
      span %
    td 
      button(type="button" @click="addSkill") Добавить
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  props: {
    editmode: {
      type: Boolean,
      default: false
    },
    skill: {
      type: Object,
      default: () => {}
    },
    typeId: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      newSkill: {
        title: "",
        percents: "",
        category: this.typeId
      }
    };
  },
  computed: {
    ...mapGetters(["userId"])
  },
  methods: {
    ...mapActions(["addNewSkill", "removeExistedSkill"]),
    async addSkill() {
      const addedSkill = await this.addNewSkill(this.newSkill);

      this.newSkill.title = "";
      this.newSkill.percents = "";
    },
    // addSkill() {
    //   const addedSkill = this.addNewSkill(this.newSkill);

    //   this.newSkill.title = "";
    //   this.newSkill.percents = "";
    // },
    removeItem() {
      this.removeExistedSkill(this.skill.id);
    }
  }
};
</script>
