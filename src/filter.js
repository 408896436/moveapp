/*过滤器*/
Vue.filter('price', function(val){
	return '$' + val;
});