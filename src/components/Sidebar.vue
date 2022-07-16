<template lang="pug">
v-navigation-drawer(
  app
  class="pt-4"
  color="primary"
  mini-variant
)
  div
    v-icon.d-block.text-center.mx-auto(
      color="white"
      large
    ) task_alt
  div
    router-link(to="/")
      v-icon.d-block.text-center.mx-auto.pt-6(color="white") home
    router-link(to="/to-do")
      v-icon.d-block.text-center.mx-auto.pt-6(color="white") task
    router-link(to="/kanban")
      v-icon.d-block.text-center.mx-auto.pt-6(color="white") table_chart
</template>