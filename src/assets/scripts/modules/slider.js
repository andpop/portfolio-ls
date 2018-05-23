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
  template: "#slider-btn",
  props: {
    works: Array,
    currentIndex: Number
  },
  computed: {
    prevBtnArr() {
      const worksArray = [...this.works];
      const lastItem = worksArray[worksArray.length - 1];

      worksArray.unshift(lastItem);
      worksArray.pop();
      return worksArray;
    },
    nextBtnArr() {
      const worksArray = [...this.works];
      const firstItem = worksArray[0];

      worksArray.push(firstItem);
      worksArray.shift();
      return worksArray;
    }
  },
  methods: {
    slide(direction) {
      this.$emit("slide", direction);
    }
  }
};

new Vue({
  el: "#slider-component",
  template: "#slider",
  components: {
    info,
    display,
    buttons
  },
  data: {
    works: [],
    currentIndex: 0
  },
  computed: {
    currentWork() {
      const worksAmount = this.works.length - 1;

      if (this.currentIndex > worksAmount) {
        this.currentIndex = 0;
      }

      if (this.currentIndex < 0) {
        this.currentIndex = worksAmount;
      }
      return this.works[this.currentIndex];
    }
  },
  methods: {
    handleSlide(direction) {
      switch (direction) {
        case "next":
          this.currentIndex = this.currentIndex + 1;
          break;
        case "prev":
          this.currentIndex = this.currentIndex - 1;
          break;
      }
    }
  },
  created() {
    this.works = require("../../../data/works.json");
  }
});
