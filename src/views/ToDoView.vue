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
          :input-value="task.isDone"
          color="primary"
          @click="task.isDone ? undoneTask(index) : doneTask(index)"
        )
        remove-button

</template>

<script>
import Form from '@/components/Form.vue';
import RemoveButton from '@/components/RemoveButton.vue';
import { mapActions, mapState } from 'vuex';

export default {
  components: {
    'form-to-do': Form,
    'remove-button': RemoveButton,
  },
  methods: {
    ...mapActions([ 'doneTask', 'undoneTask' ]),
  },
  computed: {
    ...mapState(['tasks']),
  }
};
</script>
