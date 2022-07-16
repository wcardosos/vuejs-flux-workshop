<template lang="pug">
v-btn(
  plain
  color="red"
  @click="removeTask(index)"
) Remover
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions([ 'removeTask' ]),
  },
}
</script>