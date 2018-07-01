// console.log("In slider.js");
import Vue from "vue";
import { thisExpression } from "babel-types";

const info = {
  template: "#slider-info",
  props: {
    work: Object
  }
};

const display = {
  template: "#slider-display",
  props: {
    work: Object
  }
};

const buttons = {
  template: "#slider-buttons",
  props: {
    works: Array,
    currentIndex: Number
  },
  methods: {
    slide(direction) {
      this.$emit("slide", direction);
    },
    getImage(direction) {
      const worksArray = [...this.works];

      switch (direction) {
        case "prev":
          const lastItem = worksArray[worksArray.length - 1];
          worksArray.unshift(lastItem);
          worksArray.pop();
          break;

        case "next":
          worksArray.push(worksArray[0]);
          worksArray.shift();
          break;
      }
      return worksArray[this.currentIndex];
    }
  }
};

new Vue({
  el: "#slider-component",
  components: {
    info,
    display,
    buttons
  },
  data: {
    works: [],
    currentWork: {},
    currentIndex: 0
  },
  watch: {
    currentIndex(value) {
      if (value > this.works.length - 1) this.currentIndex = 0;
      if (value < 0) this.currentIndex = this.works.length - 1;
      this.currentWork = this.works[value];
    }
  },
  created() {
    this.works = require("../../data/works.json");
    this.currentWork = this.works[0];
  },
  methods: {
    handleSlide(direction) {
      if (direction === "next") this.currentIndex++;
      if (direction === "prev") this.currentIndex--;
    }
  },
  template: "#slider"
});
