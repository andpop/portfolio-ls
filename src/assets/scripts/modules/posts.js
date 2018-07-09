// console.log("In posts.js");
import Vue from "vue";

new Vue({
  el: "#posts-container",
  data: {
    posts: []
  },
  created() {
    this.posts = require("../../data/posts.json");
    console.log(this.posts);
  },
  methods: {
    stringDate(unixDate) {
      const date = new Date(unixDate * 1000);
      const year = date.getFullYear();
      const month = zeroFill(date.getMonth() + 1, 2);
      const day = zeroFill(date.getDate(), 2);
      return `${day}.${month}.${year}`;

      function zeroFill(num, len) {
        return (Array(len).join("0") + num).slice(-len);
      }
    }
  },
  template: "#posts"
});
