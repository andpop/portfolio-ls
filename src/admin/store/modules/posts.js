const posts = {
  actions: {
    addPost(store, post) {
      console.log("In store", post);
      this.$axios.post("/posts", post).then(response => {});
    }
  }
};

export default posts;
