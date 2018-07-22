import Vue from "vue";
import axios from "axios";
import { skillsURL } from "../functions";

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
    axios.get(skillsURL).then(response => {
      const skillsArray = [];
      skillsArray[0] = {
        skillsGroup: "Frontend",
        skills: {}
      };
      skillsArray[1] = {
        skillsGroup: "Backend",
        skills: {}
      };
      skillsArray[2] = {
        skillsGroup: "Workflow",
        skills: {}
      };
      for (let skill of response.data) {
        let category = +skill.category;
        skillsArray[category].skills[skill.title] = skill.percents;
      }
      this.skills = skillsArray;
    });
    // Так грузились данные из внешнего файла
    // const data = require("../../data/skills.json");
    // this.skills = data;
  },
  template: "#skills-list"
});
