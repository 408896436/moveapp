import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routerConfig'

Vue.use(VueRouter);

let router = new VueRouter({
  	routes
});

new Vue({
  router,	
  el : '#app'
});
