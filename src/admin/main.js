import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import axios from "./requests";

store.$axios = axios;

const app = new Vue({
  el: "#admin-app",
  store,
  router,
  render: h => h(App)
});
