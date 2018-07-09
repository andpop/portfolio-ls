import Vue from "vue";
import axios from "axios";

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
    axios.get("http://webdev-api.loftschool.com/skills/9").then(response => {
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
      skillsArray[2].skills["Git"] = 30;
      skillsArray[2].skills["Gulp"] = 60;
      skillsArray[2].skills["Yarn"] = 45;

      // skillsArray[0] = {
      //   skillsGroup: "Frontend",
      //   skills: {
      //     html5: 30,
      //     css3: 50,
      //     "JavaScript & jQuery": 30
      //   }
      // };
      // skillsArray[1] = {
      //   skillsGroup: "Backend",
      //   skills: {
      //     Php: 30,
      //     mySql: 60,
      //     "Node.js & npm": 30,
      //     "Mongo.db": 70
      //   }
      // };
      // skillsArray[2] = {
      //   skillsGroup: "WorkFlow",
      //   skills: {
      //     Git: 30,
      //     Gulp: 60,
      //     Yarn: 60
      //   }
      // };
      console.log(skillsArray);
      this.skills = skillsArray;
    });

    // const data = require("../../data/skills.json");
    // this.skills = data;
  },
  template: "#skills-list"
});
