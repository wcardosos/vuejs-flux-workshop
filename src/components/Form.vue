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

export default {
  data() {
    return {
      taskToAdd: '',
    };
  },
}
</script>