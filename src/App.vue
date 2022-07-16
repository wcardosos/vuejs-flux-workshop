<template lang="pug">
v-app
  v-app-bar(
    app
    color="primary"
    dark
  )
    div.my-auto
      p To Do

    v-spacer

    v-btn(
      href="https://github.com/vuetifyjs/vuetify/releases/latest"
      target="_blank"
      text
    )
      span.mr-2 Latest Release
      v-icon mdi-open-in-new

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
