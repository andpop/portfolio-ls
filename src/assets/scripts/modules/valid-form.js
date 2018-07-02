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
        this.invalidLogin = true;
        return;
      }
      // Проверяем на пустоту пароль
      if (!password) {
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
      console.log("Focel login");
    }
  }
});
