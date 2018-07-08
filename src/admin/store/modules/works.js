const works = {
  state: {
    data: []
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
    }
  },
  actions: {
    addNewWork({ commit }, work) {
      // console.log(work);
      this.$axios.post("/works", work).then(response => {
        commit("addWork", response.data);
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
