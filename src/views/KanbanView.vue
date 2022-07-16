<template lang="pug">
v-container
  h1 Kanban
  v-row.d-flex.space-between.pt-4
    v-col
      v-sheet.px-4.py-4(
        color="grey lighten-4"
        elevation="1"
        min-height="400"
        width="400"
      )
        h3 A fazer
        div.pt-2(v-for="task in tasksToDo")
          p {{ task.name }}
    v-col
      v-sheet.px-4.py-4(
        color="grey lighten-4"
        elevation="1"
        min-height="400"
        width="400"
      )
        h3 Concluídos
        div.pt-2(v-for="task in tasksCompleted")
          p {{ task.name }}
  form-to-do
</template>

<script>
import Form from '@/components/Form.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    'form-to-do': Form,
  },
  computed: {
    ...mapGetters(['tasksToDo', 'tasksCompleted'])
  }
};
</script>