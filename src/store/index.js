import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
  },
  getters: {
  },
  mutations: {
    setTasks(state, payload) {
      state.tasks.push(payload);
    },
    doneTask(state, payload) {
      state.tasks[payload].isDone = true;
    },
    undoneTask(state, payload) {
      state.tasks[payload].isDone = false;
    },
  },
  actions: {
    addTask({ commit }, newTask) {
      const task = {
        name: newTask,
        isDone: false,
      };

      commit('setTasks', task);
    },
    doneTask({ commit }, index) {
      commit('doneTask', index);
    },
    undoneTask({ commit }, index) {
      commit('undoneTask', index);
    },
  },
  modules: {
  }
});
