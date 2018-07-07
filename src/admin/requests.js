import axios from "axios";

axios.defaults.baseURL = "http://webdev-api.loftschool.com";
axios.defaults.headers["Authorization"] = `Bearer ${localStorage.getItem(
  "token"
)}`;

// axios.interceptors.response.use(
//   response => {
//     console.log("response in interceptor", response);
//     return response;
//   },
//   error => {
//     const ttl = parseInt(localStorage.getItem("ttl"));
//     const DateNow = Math.floor(Date.now() / 1000);
//     const originalRequest = error.config;
//     if (DateNow > ttl && error.response.status === 401) {
//       axios.post("/refreshToken").then(response => {
//         const token = response.data.token;
//         const ttl = Math.floor(Date.now() / 1000 + response.data.ttl);
//         localStorage.setItem("token", token);
//         localStorage.setItem("ttl", ttl);
//         axios.defaults.headers["Authorization"] = `Bearer ${token}`;
//         originalRequest.headers["Authorization"] = `Bearer ${token}`;

//         return axios(originalRequest);
//       });
//     }

//     return Promise.reject(error);
//   }
// );

export default axios;
