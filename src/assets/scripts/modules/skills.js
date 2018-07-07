import Vue from "vue";

const skill = {
  template: "#skill",
  props: {
    skillName: String,
    skillPercent: Number
  },
  methods: {
    drawCircle() {
      const circle = this.$refs["color-circle"];
      const skillList = this.$root.$refs["skill-list"];
      const dashArray = parseInt(
        getComputedStyle(circle).getPropertyValue("stroke-dasharray")
      );

      window.addEventListener("scroll", () => {
        let top = skillList.getBoundingClientRect().top;
        if (top <= 300) {
          const dashArray = parseInt(
            getComputedStyle(circle).getPropertyValue("stroke-dasharray")
          );
          const dashOffset = dashArray - (dashArray / 100) * this.skillPercent;
          const strokeOpacity = this.skillPercent / 100;
          circle.style.strokeOpacity = strokeOpacity;
          let dashOffsetCurrent = dashArray;
          while (dashOffsetCurrent > dashOffset) {
            circle.style.strokeDashoffset = dashOffsetCurrent;
            dashOffsetCurrent--;
          }
        }
        // console.log("skill-list top: ", top);
      });
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
    skill: Object
  }
};

new Vue({
  el: "#skills-container",
  components: {
    skillsRow
  },
  data: {
    skills: {}
  },
  created() {
    const data = require("../../data/skills.json");
    this.skills = data;
  },
  template: "#skills-list"
});
