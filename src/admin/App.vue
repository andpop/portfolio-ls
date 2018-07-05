<template lang="pug">
  app-title
</template>

<script>
export default {
  components: {
    appTitle: require("./components/title").default
  }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&subset=cyrillic");
body {
  font-family: "Roboto", Helvetica, sans-serif;
  font-size: 16px;
  line-height: 1.42;
  color: #474b57;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
