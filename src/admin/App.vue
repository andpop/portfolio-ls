<template lang="pug">
  .container
    //- app-title
    admpanel
</template>

<script>
import admpanel from "./components/admpanel";
export default {
  components: {
    // appTitle: require("./components/title").default,
    admpanel
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
  height: 100%;
  background: url(hero-bg.jpg) bottom no-repeat;
  background-color: #223b65;
  background-size: cover;
  // margin: 0 auto;
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
</style>
