let routerConfig = [
	{
		path:'/', 
		component:resolve => require(['./template/Index.vue'], resolve),
        meta: {
            title: '腾讯IP Mall'
        }
	},
    {
    	path:'/index', 
    	component:resolve => require(['./template/Index.vue'], resolve),
        meta: {
            title: '腾讯IP Mall'
        }
    },
    {
    	path:'/personal', 
    	component:resolve => require(['./template/Personal.vue'], resolve),
         meta: {
            title: '个人中心'
        }
    },
    {
        path:'/question', 
        component:resolve => require(['./template/Question.vue'], resolve),
        meta: {
            title: '常见问题'
        }
    },
    {
        path:'/goodstype', 
        component:resolve => require(['./template/GoodsType.vue'], resolve),
        meta: {
            title: '分类'
        }
    },
    {
        path:'/buycar', 
        component:resolve => require(['./template/BuyCar.vue'], resolve),
        meta: {
            title: '购物车'
        }
    }     	
];

export default routerConfig;