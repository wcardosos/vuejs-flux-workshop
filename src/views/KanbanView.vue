<template lang="pug">
v-container
  h1 Kanban
  v-row.d-flex.space-between.pt-4
    kanban-tasks-list(
      title="A fazer"
      :tasks="tasksToDo"
    )
    kanban-tasks-list(
      title="Concluídos"
      :tasks="tasksCompleted"
    )
  form-to-do
</template>

<script>
import Form from '@/components/Form.vue';
import KanbanTasksList from '@/components/KanbanTasksList.vue';
import RemoveButton from '@/components/RemoveButton.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    'form-to-do': Form,
    'remove-button': RemoveButton,
    'kanban-tasks-list': KanbanTasksList
  },
};
</script>