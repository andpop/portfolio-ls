const posts = {
  state: {
    data: [],
    lastResponse: {},
    requestStatus: "1"
  },
  mutations: {
    fillUpPosts(state, posts) {
      state.data = posts;
    },
    addPost(state, post) {
      state.data.push(post);
    },
    removePost(state, postId) {
      state.data = state.data.filter(item => item.id !== postId);
    },
    saveResponse(state, response) {
      state.lastResponse = response;
    },
    setRequestStatus(state, status) {
      state.requestStatus = status;
    }
  },
  actions: {
    addNewPost({ commit }, post) {
      this.$axios
        .post("/posts", post)
        .then(response => {
          commit("addPost", response.data);
          commit("setRequestStatus", "ok");
          commit("saveResponse", response);
        })
        .catch(error => {
          commit("setRequestStatus", "error");
          commit("saveResponse", error);
        });
    },
    removeExistedPost({ commit }, postId) {
      this.$axios.delete(`/posts/${postId}`).then(response => {
        commit("removePost", postId);
      });
    },
    fetchPosts({ commit, getters }) {
      return this.$axios.get(`/posts/9`).then(response => {
        commit("fillUpPosts", response.data);
      });
    }
  }
};

export default posts;
