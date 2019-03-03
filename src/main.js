import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router';

import axios from 'axios';
import Login from './pages/Login';
import Admin from './pages/Admin';

Vue.use(ElementUI);
Vue.use(VueRouter);

const routes = [
    {path:"/", redirect: '/login'},
    {path:"/login",component:Login},
    {path:"/admin",component:Admin},
];

const router = new VueRouter({routes});

Vue.config.productionTip = false

Vue.prototype.$axios = axios;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
