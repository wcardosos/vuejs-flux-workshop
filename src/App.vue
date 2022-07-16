<template lang="pug">
v-app
  sidebar

  v-main
    router-view
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';

export default {
  name: 'App',
  components: {
    Sidebar,
  },
  data: () => ({
    //
  }),
};
</script>

<style>
a {
  text-decoration: none;
}
</style>
