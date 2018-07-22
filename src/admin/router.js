import Vue from "vue";
import VueRouter from "vue-router";
import axios from "axios";

Vue.use(VueRouter);

const guard = axios.create({
  baseURL: "http://webdev-api.loftschool.com"
});

import header from "./components/header.vue";
import menu from "./components/menu.vue";
import about from "./components/about.vue";
import blog from "./components/blog.vue";
import addPost from "./components/addPost.vue";
import works from "./components/works.vue";
import addWork from "./components/addWork.vue";

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
    path: "/addpost",
    components: {
      default: addPost
    }
  },
  {
    path: "/works",
    components: {
      default: works
    }
  },
  {
    path: "/addwork",
    components: {
      default: addWork
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
