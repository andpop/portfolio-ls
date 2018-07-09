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
  template: "#posts"
});
