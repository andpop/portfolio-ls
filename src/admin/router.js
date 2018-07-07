import Vue from "vue";
import VueRouter from "vue-router";
import axios from "axios";

Vue.use(VueRouter);

const guard = axios.create({
  baseURL: "http://webdev-api.loftschool.com"
});

import header from "./components/admpanelHeader.vue";
import menu from "./components/admpanelMenu.vue";
import about from "./components/admpanelAbout.vue";
import blog from "./components/admpanelBlog.vue";
import works from "./components/admpanelWorks.vue";

const routes = [
  {
    path: "/",
    components: {
      default: about
    }
  },
  {
    path: "/blog",
    components: {
      default: blog
    }
  },
  {
    path: "/works",
    components: {
      default: works
    }
  }
];

const router = new VueRouter({ routes });

// router.beforeEach((to, from, next) => {
//   guard
//     .get("/user", {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem("token")}`
//       }
//     })
//     .then(response => {
//       next();
//     })
//     .catch(error => {
//       console.log("error in router");
//       localStorage.removeItem("token");
//       window.location.href = "//google.com";
//     });

//   // next();
// });

export default router;
