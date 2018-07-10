<template lang="pug">
  .content
    router-view
    //- admpanel-blog
    //- admpanel-works
</template>
<script>
import blog from "./blog";
import works from "./works";

export default {
  components: {
    blog,
    works
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
  padding-top: 20px;
  margin-bottom: 20px;
}

.subtitle {
  margin-bottom: 15px;
}

.admin-table {
  margin-bottom: 40px;
  border-collapse: collapse;

  td {
    border: 1px solid black;
    padding: 20px;
  }
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

.buttons-list {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: baseline;
}

.buttons-item {
  margin-right: 30px;

  &:last-child {
    margin-right: 0;
  }
}

.button {
  // display: inline-block;
  cursor: pointer;
  text-decoration: none;
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

.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;

  &__container {
    position: relative;
  }

  &__content {
    width: 300px;
    border-radius: 4px;
    text-align: center;
    background-color: #fff;
    color: #2f3234;
    padding: 20px;
  }

  &__message {
    margin-bottom: 20px;
  }

  &__btn {
    padding: 10px 20px;

    &--error {
      background-color: #e45028;
      color: #fff;
    }
  }
}
</style>
