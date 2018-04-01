<template>
  <div class='bot-nav'>
    <router-link class='a1 aa select_sy' to="/index"><span class='shouye'></span>首页</router-link>
    <router-link class='a2 aa' to="/goodstype"><span class='fenlei'></span>分类</router-link>
    <router-link class='a3 aa' to="/goodstype"><span class='gouwuche'><em>15</em></span>购物车</router-link>
    <router-link class='a4 aa' to="/personal"><span class='my'><em>15</em></span>我的</router-link>
  </div>
</template>
<style scoped>
  .bot-nav{position: fixed; bottom: 0; left: 0; z-index: 9998; height: 0.96rem; width: 100%; background: #fff; border-top: 0.02rem solid #d3d3d3; font-size: 0.22rem;}
  .bot-nav{text-align: center;}
  .bot-nav .aa{color: #000; display: inline-block; margin: 0 0.6rem; position: relative;}
  .bot-nav span{display: block; margin: 0.15rem auto 0.1rem;}
  .bot-nav .shouye{ width: 0.41rem; height: 0.37rem; background: url('../assets/sp/n1.jpg') no-repeat 0 0; background-size: 0.41rem;}
  .bot-nav .fenlei{ width: 0.36rem; height: 0.36rem; background: url('../assets/sp/n2.jpg') no-repeat 0 0; background-size: 0.36rem;}
  .bot-nav .gouwuche{ width: 0.38rem; height: 0.35rem; background: url('../assets/sp/n3.jpg') no-repeat 0 0; background-size: 0.38rem;}
  .bot-nav .my{ width: 0.35rem; height: 0.33rem; background: url('../assets/sp/n4.jpg') no-repeat 0 0; background-size: 0.35rem;}
  .bot-nav .select_sy span{background: url('../assets/sp/n11.jpg') no-repeat 0 0; background-size: 0.41rem; }
  .bot-nav .select_sy {color: red;}
  .bot-nav .select_fl span{background: url('../assets/sp/n22.jpg') no-repeat 0 0; background-size: 0.36rem; }
  .bot-nav .select_fl {color: red;}
  .bot-nav .select_car span{background: url('../assets/sp/n33.jpg') no-repeat 0 0; background-size: 0.38rem; }
  .bot-nav .select_car {color: red;}
  .bot-nav .select_my span{background: url('../assets/sp/n44.jpg') no-repeat 0 0; background-size: 0.35rem; }
  .bot-nav .select_my {color: red;}
  .bot-nav .aa em{font-style: normal; display: block; position: absolute; top: 0.1rem; right: 0; width: 0.28rem; height: 0.28rem; background: #fb4c45; color: #fff; border-radius: 50%; font-size: 0.16rem; line-height: 0.28rem;}
  .bot-nav .a4 em{right: -0.1rem;}
</style>
<script>
</script>