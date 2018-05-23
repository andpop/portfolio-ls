import Vue from "vue";

const skill = {
  template: "#skill",
  props: {
    skillName: String,
    skillPercents: Number
  },
  methods: {
    drawCircle() {
      const circle = this.$refs["color-circle"];
      const dashOffset = parseInt(
        getComputedStyle(circle).getPropertyValue("stroke-dashoffset")
      );
      const persents = (dashOffset / 100) * (100 - this.skillPercents);
      
      circle.style.strokeDashoffset = persents;
    }
  },
  mounted() {
    this.drawCircle();
  }
};

const skillsRow = {
  template: "#skills-row",
  components: {
    skill
  },
  props: {
    skills: Object
  }
};

new Vue({
  el: "#skill-list-component",
  template: "#skills-list",
  components: {
    skillsRow
  },
  data: {
    skills: {}
  },
  mounted() {
    const data = require("../../../data/skills.json");
    this.skills = data;
  }
});
