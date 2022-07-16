<template lang="pug">
v-container
  h1 Lista de tarefas
  div.pt-4
    v-row
      v-text-field(
        label="Adicione uma nova tarefa"
        v-model="taskToAdd"
      )
      v-btn(
        depressed
        color="primary"
        @click="addNewTask"
      ) Adicionar
  div.pt-6
    h2 Tarefas cadastradas
    div(
      v-if="tasks.length"
      v-for="(task, index) in tasks"
    )
      v-checkbox(
        :label="task.name"
        :checked="task.isDone"
        color="primary"
        @click="task.isDone ? undoneOneTask(index) : doneOneTask(index)"
      )
</template>

<script>
import {
  mapActions,
  mapState,
} from 'vuex';

export default {
  data() {
    return {
      taskToAdd: '',
    };
  },
  methods: {
    ...mapActions([
      'addTask',
      'doneTask',
      'undoneTask'
    ]),
    addNewTask() {
      this.addTask(this.taskToAdd);

      this.taskToAdd = '';
    },
    doneOneTask(index) {
      this.doneTask(index);
    },
    undoneOneTask(index) {
      this.undoneTask(index);
    },
  },
  computed: {
    ...mapState(['tasks']),
  }
};
</script>
