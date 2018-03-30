let routerConfig = [
	{
		path:'/', 
		component:resolve => require(['./template/Index.vue'], resolve)
	},
    {
    	path:'/index', 
    	component:resolve => require(['./template/Index.vue'], resolve)
    },
    {
    	path:'/about', 
    	component:resolve => require(['./template/About.vue'], resolve)
    }	
];

export default routerConfig;