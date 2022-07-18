<template lang="pug">
v-container
  v-row.text-center
    v-col(cols="12")
      v-icon(color="primary" x-large) task_alt
    v-col.mb-4
      h1.display-2.font-weight-bold.mb-3 Organize suas tarefas
      p.subheading.font-weight-regular Facilite seu dia
  div.pt-6
    h2 Tarefas de hoje
    v-row.d-flex.space-between.pt-4
      v-col
        v-sheet.text-center.px-4.py-4(
          color="grey lighten-4"
          elevation="1"
          height="300"
          width="400"
        )
          h1.task-count 0
          h2.mt-4 Tarefas concluídas
      v-col
        v-sheet.text-center.px-4.py-4(
          color="grey lighten-4"
          elevation="1"
          height="300"
          width="400"
        )
          h1.task-count  0
          h2.mt-4 Tarefas pendentes
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style>
.task-count {
  font-size: 96px;
}
</style>
