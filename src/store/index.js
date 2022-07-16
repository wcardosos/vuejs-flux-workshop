import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
  },
  getters: {
    tasksToDo(state) {
      return state.tasks.filter(task => task.isDone !== true)
    },
    tasksCompleted(state) {
      return state.tasks.filter(task => task.isDone === true)
    },
  },
  mutations: {
    setTasks(state, payload) {
      state.tasks.push(payload);
    },
    removeTask(state, payload) {
      state.tasks.splice(payload, 1);
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
    removeTask({ commit }, index) {
      commit('removeTask', index);
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
