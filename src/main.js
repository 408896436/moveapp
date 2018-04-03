import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routerConfig'

//自定义全局组件
import BotNav from './template/Nav-Bottom'
const botNav = {
	install : function(Vue){
		Vue.component('nav-bottom', BotNav);
	}
}
Vue.use(botNav)

//使用路由
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

//初始化
new Vue({
  router,	
  el : '#app',
  //控制路由切换的时候滚动条位置 有bug
  scrollBehavior (to, from, savedPosition) {
     if (savedPosition) {
      return savedPosition
     } else {
      return { x: 0, y: 0 }
     }
    }
});








/*过滤器*/
Vue.filter('price', function(val){
  return '$' + val;
});
