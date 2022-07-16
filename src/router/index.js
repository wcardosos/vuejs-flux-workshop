import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import ToDoView from '@/views/ToDoView.vue';
import KanbanView from '@/views/KanbanView.vue';

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
  {
    path: '/kanban',
    name: 'kanban',
    component: KanbanView,
  }
];

const router = new VueRouter({
  routes
});

export default router;
