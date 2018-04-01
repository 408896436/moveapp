import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routerConfig'

Vue.use(VueRouter);

let router = new VueRouter({
  	routes
});

//路由发生变化修改页面title
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
});

new Vue({
  router,	
  el : '#app'
});
