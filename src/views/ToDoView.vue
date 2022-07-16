<template lang="pug">
v-container
  h1 Lista de tarefas
  form-to-do
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
import Form from '@/components/Form.vue';
import { mapActions, mapState } from 'vuex';

export default {
  components: {
    'form-to-do': Form,
  },
  methods: {
    ...mapActions([ 'doneTask', 'undoneTask' ]),
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
