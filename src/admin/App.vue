<template lang="pug">
  .container
    .admpanel
      app-header
      app-menu
      app-content
</template>

const data = [
  { id: 1, title: "Html", percent: 20, category: 0 },
  { id: 2, title: "PHP", percent: 20, category: 1 },
  { id: 3, title: "CSS", percent: 20, category: 0 },
  { id: 4, title: "Node.js", percent: 20, category: 1 },
  { id: 5, title: "Mongo", percent: 20, category: 1 },
  { id: 6, title: "Git", percent: 20, category: 2 },
  { id: 7, title: "Gulp", percent: 20, category: 2 }
];


<script>
import appHeader from "./components/header";
import appMenu from "./components/menu";
import appContent from "./components/content";

export default {
  components: {
    appHeader,
    appMenu,
    appContent
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&subset=cyrillic");
body {
  font-family: "Roboto", Helvetica, sans-serif;
  font-size: 16px;
  line-height: 1.42;
  color: #474b57;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.container {
  width: 100%;
  height: 120vh;
  background: url(hero-bg.jpg) bottom no-repeat;
  background-color: #223b65;
  background-size: cover;
}

ul {
  margin: 0;
  padding: 0;

  li {
    list-style: none;
  }
}

* {
  box-sizing: border-box;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

.admpanel {
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
}
</style>
