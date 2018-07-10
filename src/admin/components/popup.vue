<template lang="pug">
  .popup(v-if="isShowPopup")
    .popup__container
      .popup__content
        p.popup__message {{popupMessage}}
        button(@click.prevent="isShowPopup = false;").button.button--info Закрыть
</template>

<script>
export default {
  props: {
    isShowPopup: {
      type: Boolean,
      default: false
    },
    popupMessage: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
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
