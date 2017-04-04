import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Edit from '@/components/Edit';
import Add from '@/components/Add';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/edit/:id',
      name: 'Edit',
      component: Edit,
    },
    {
      path: '/add',
      name: 'Add',
      component: Add,
    },
  ],
  mode: 'history',
});
