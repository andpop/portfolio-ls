// console.log("In valid-form.js");
import Vue from "vue";

new Vue({
  el: "#auth-form",
  data: {
    formData: {
      login: "",
      password: "",
      isHuman: false,
      humanConfirm: "human-no"
    },
    hintText: {
      loginError: "Вы не ввели логин",
      passwordError: "Вы не ввели пароль"
    },
    invalidLogin: false,
    invalidPassword: false
  },
  methods: {
    submit() {
      const login = this.formData.login.trim();
      const password = this.formData.password.trim();
      // Проверяем на пустоту логин
      if (!login) {
        const loginIcon = document.getElementById("icon-login");
        loginIcon.style.fill = "#e44845";
        this.invalidLogin = true;
        return;
      }
      // Проверяем на пустоту пароль
      if (!password) {
        const passwordIcon = document.getElementById("icon-password");
        passwordIcon.style.fill = "#e44845";
        this.invalidPassword = true;
        return;
      }
      // Делаем проверку на заполнение формы человеком
      // console.log(this.formData.isHuman, this.formData.humanConfirm);
      if (!this.formData.isHuman || this.formData.humanConfirm === "human-no")
        return;
      // Форма заполнена корректно - отсылаем данные на сервер
      console.log("AJAX need");
    },
    loginFocus() {
      this.invalidLogin = false;
      const inputIcon = document.getElementById("icon-login");
      inputIcon.style.fill = "#0548be";
    },
    loginBlur() {
      // this.invalidLogin = false;
      const inputIcon = document.getElementById("icon-login");
      inputIcon.style.fill = "#c4cbcd";
    },
    passwordFocus() {
      this.invalidPassword = false;
      const inputIcon = document.getElementById("icon-password");
      inputIcon.style.fill = "#0548be";
    },
    passwordBlur() {
      // this.invalidLogin = false;
      const inputIcon = document.getElementById("icon-password");
      inputIcon.style.fill = "#c4cbcd";
    }
  }
});
