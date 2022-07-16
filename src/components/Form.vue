<template lang="pug">
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
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      taskToAdd: '',
    };
  },
  methods: {
    ...mapActions(['addTask']),
    addNewTask() {
      this.addTask(this.taskToAdd);

      this.taskToAdd = '';
    },
  },
}
</script>