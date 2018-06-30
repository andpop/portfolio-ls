console.log("In slider.js");
import Vue from "vue";

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
    work: Array,
    currentIndex: Number
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
  created() {
    this.works = require("../../data/works.json");
    this.currentWork = this.works[0];
  },
  template: "#slider"
});
