import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import ToDoView from '@/views/ToDoView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/to-do',
    name: 'to-do',
    component: ToDoView,
  },
];

const router = new VueRouter({
  routes
});

export default router;
