<template lang="pug">
v-col
  v-sheet.px-4.py-4(
  color="grey lighten-4"
  elevation="1"
  min-height="400"
  width="400"
  )
    h3 {{ title }}
    div.px-4.pt-6(v-for="(task, index) in tasks")
      v-row.d-flex
        p {{ task.name }}
        remove-button
        v-btn(
            plain
            color="primary"
            @click="task.isDone ? undoneTask(index) : doneTask(index)"
        ) {{ task.isDone ? 'Desfazer' : 'Concluir'}}
</template>

<script>
import RemoveButton from '@/components/RemoveButton.vue';
import { mapActions } from 'vuex';

export default {
  props: {
    title: {
      type: String,
      default: undefined,
    },
    tasks: {
      type: Array,
      default: []
    },
  },
  components: {
    'remove-button': RemoveButton,
  },
}
</script>