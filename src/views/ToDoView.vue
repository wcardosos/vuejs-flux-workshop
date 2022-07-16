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
      v-row.d-flex.space-between.align-center
        v-checkbox(
          :label="task.name"
          :checked="task.isDone"
          color="primary"
          @click="task.isDone ? undoneTask(index) : doneTask(index)"
        )
        v-btn(
          plain
          color="red"
          @click="removeTask(index)"
        ) Remover

</template>

<script>
import Form from '@/components/Form.vue';
import { mapActions, mapState } from 'vuex';

export default {
  components: {
    'form-to-do': Form,
  },
  methods: {
    ...mapActions([ 'doneTask', 'undoneTask', 'removeTask' ]),
  },
  computed: {
    ...mapState(['tasks']),
  }
};
</script>
