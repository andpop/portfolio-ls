const user = {
  state: {
    userdata: {}
  },
  mutations: {
    fillUpUserData(state, user) {
      state.userdata = user;
    },
    clearUserData(state) {
      state.userdata = {};
    }
  },
  getters: {
    userId: state => state.userdata.id
  },
  actions: {
    getUserInfo({ commit, state }) {
      return this.$axios
        .get("/user")
        .then(
          response => {
            commit("fillUpUserData", response.data.user);
          },
          error => {
            console.log("usererrororr");
          }
        )
        .catch(e => console.error(e));
    },
    logout({ commit }) {
      return this.$axios.post("/logout").then(response => {
        console.log("logout response", response);
        localStorage.removeItem("token");
        commit("clearUserData");
      });
    }
  }
};

export default user;
