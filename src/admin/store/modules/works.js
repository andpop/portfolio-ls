const works = {
  state: {
    data: [],
    lastResponse: {},
    requestStatus: ""
  },
  mutations: {
    fillUpWorks(state, works) {
      state.data = works;
    },
    addWork(state, work) {
      state.data.push(work);
    },
    removeWork(state, workId) {
      state.data = state.data.filter(item => item.id !== workId);
    },
    saveResponse(state, response) {
      state.lastResponse = response;
    },
    setRequestStatus(state, status) {
      state.requestStatus = status;
    }
  },
  actions: {
    addNewWork({ commit }, work) {
      // console.log(work);
      this.$axios
        .post("/works", work)
        .then(response => {
          commit("addWork", response.data);
          commit("setRequestStatus", "ok");
          commit("saveResponse", response);
        })
        .catch(error => {
          commit("setRequestStatus", "error");
          commit("saveResponse", error);
        });
    },
    removeExistedWork({ commit }, workId) {
      this.$axios.delete(`/works/${workId}`).then(response => {
        commit("removeWork", workId);
      });
    },
    fetchWorks({ commit, getters }) {
      return this.$axios.get(`/works/9`).then(response => {
        commit("fillUpWorks", response.data);
      });
    }
  }
};

export default works;

// actions: {
//   addWork(store, work) {
//     this.$axios.post("/works", work).then(response => {});
//   }
// }
// };
