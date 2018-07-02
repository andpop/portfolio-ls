// console.log("In valid-form.js");
import Vue from "vue";

new Vue({
  el: "#auth-form",
  data: {
    formData: {
      login: "",
      password: ""
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
      // console.log("Submiiiiiiiiiiiit");
      const login = this.formData.login.trim();
      const password = this.formData.password.trim();
      if (!login) {
        this.invalidLogin = true;
        return;
      }
      if (!password) {
        this.invalidPassword = true;
        return;
      }
      console.log(login);
    },
    loginFocus() {
      this.invalidLogin = false;
      console.log("Focel login");
    }
  }
});
