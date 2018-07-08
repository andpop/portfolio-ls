const posts = {
  state: {
    data: []
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
    }
  },
  actions: {
    addNewPost({ commit }, post) {
      this.$axios.post("/posts", post).then(response => {
        commit("addPost", response.data);
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
