<template lang="pug">
v-app
  v-app-bar(
    app
    color="primary"
    dark
  )
    div
      p To Do

  v-main
    router-view
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
