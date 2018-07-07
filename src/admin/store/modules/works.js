const works = {
  actions: {
    addWork(store, work) {
      this.$axios.post("/works", work).then(response => {});
    }
  }
};

export default works;
