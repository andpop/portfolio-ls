const skills = {
  state: {
    data: []
  },
  mutations: {
    fillUpSkills(state, skills) {
      state.data = skills;
    },
    addSkill(state, skill) {
      state.data.push(skill);
    },
    removeSkill(state, skillId) {
      state.data = state.data.filter(item => item.id !== skillId);
    }
  },
  actions: {
    addNewSkill({ commit }, skill) {
      // console.log(skill);
      this.$axios.post("/skills", skill).then(response => {
        commit("addSkill", response.data);
      });
    },
    removeExistedSkill({ commit }, skillId) {
      this.$axios.delete(`/skills/${skillId}`).then(response => {
        commit("removeSkill", skillId);
      });
    },
    fetchSkills({ commit, getters }) {
      return this.$axios.get(`/skills/9`).then(response => {
        commit("fillUpSkills", response.data);
      });
    }
  }
};

export default skills;
