<template lang="pug">
  .content
    router-view
    //- admpanel-blog
    //- admpanel-works
</template>
<script>
import admpanelBlog from "./admpanelBlog";
import admpanelWorks from "./admpanelWorks";

export default {
  components: {
    admpanelBlog,
    admpanelWorks
  }
};
</script>
<style lang="scss">
.content {
  background-color: rgba(#fff, 0.85);
  padding-left: 30px;
  font-family: "Roboto", Helvetica, sans-serif;
  height: 100%;
}

.title {
  padding-top: 50px;
  margin-bottom: 45px;
}

.subtitle {
  margin-bottom: 15px;
}

.form {
  display: flex;
  flex-direction: column;
  font-size: 16px;
}

.input {
  width: 303px;
  height: 48px;
  background-color: #fff;
  margin-bottom: 20px;
  padding-left: 20px;
  border-radius: 8px;
  border: none;
  color: #474b57;
}

.textarea {
  width: 503px;
  height: 303px;
  padding-left: 20px;
  padding-top: 20px;
  border-radius: 8px;
  border: none;
  margin-bottom: 30px;
  color: #474b57;
}

.input-file {
  margin-bottom: 20px;
}

.button {
  // display: inline-block;
  cursor: pointer;
  padding: 15px 20px;
  margin-bottom: 20px;
  width: max-content;
  // max-width: 100px;
  background-color: #0548be;
  color: #ffffff;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  border-radius: 8px;
  border: none;
}
</style>
