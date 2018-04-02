<template>
  <div>

    <!--头像 S-->
    <div class='user-tx'>
        <dl>
          <dt><span><img src="../assets/tx.jpg"></span></dt>
          <dd>林俊杰</dd>
        </dl>
    </div>
    <!--头像 E-->

    <!--我的订单 S-->
    <div class='myorder'>
       <router-link to="/index">
          <ul>
            <li><span class='icon'></span>我的订单</li>
            <li>查看全部订单 ></li>
          </ul>
       </router-link>
    </div>
    <!--我的订单 E-->
    
    <!--订单导航列表 S-->
    <div class='orderlist'>
      <ul>
        <li><router-link to="/index"><span class='icon1'><strong class='message'>12</strong></span><em>待付款</em></router-link></li>
        <li><router-link to="/index"><span class='icon2'><strong class='message'>12</strong></span><em>待发货</em></router-link></li>
        <li><router-link to="/index"><span class='icon3'><strong class='message'>12</strong></span><em>待收货</em></router-link></li>
        <li><router-link to="/index"><span class='icon4'><strong class='message'>12</strong></span><em>待评价</em></router-link></li>
        <li><router-link to="/index"><span class='icon5'><strong class='message'>12</strong></span><em>售后</em></router-link></li>
      </ul>
    </div>
    <!--订单导航列表 E-->
    
    <!--消息列表 S-->
    <div class='msglist'>
      <ul>
        <li><router-link to="/index"><span class='icon-msg'></span><p>消息中心<strong class='message'>12</strong></p><em>></em></router-link></li>
        <li><router-link to="/index"><span class='icon-add'></span>收货地址管理<em>></em></router-link></li>
        <li><router-link to="/question"><span class='icon-question'></span>常见问题<em>></em></router-link></li>
      </ul>
    </div>
    <!--消息列表 E-->

  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
  .user-tx{height: 2.34rem; background: url('../assets/sp/10.jpg') no-repeat 0 0; background-size: 7.5rem; color: #fff; font-size: 0.3rem; overflow: hidden;}
  .user-tx dt span{display: block; width: 1.42rem; border: 0.07rem solid #f47b76; border-radius: 50%; overflow: hidden;}
  .user-tx dt,.user-tx dd{float: left; display: inline;}
  .user-tx dd{padding: 0.4rem 0 0 0.24rem;}
  .user-tx dl{overflow: hidden; margin: 0.45rem 0 0 0.2rem;}
  .myorder{height: 1.1rem; padding: 0 0.2rem; border-bottom: 0.01rem solid #dddddd; font-size: 0.28rem; line-height: 1.1rem;}
  .myorder li{float: left; display: inline;}
  .myorder a{color: #000; display: inline-block; width: 100%;}
  .myorder .icon{display: inline-block; width: 0.27rem; height: 0.31rem; background: url('../assets/sp/4.png') no-repeat 0 0; background-size: 0.27rem; vertical-align: middle; margin-right: 0.23rem;}
  .myorder :nth-child(2){float: right; color: #a7a7a7; font-size: 0.26rem;}
  .orderlist span{display: block; margin: 0 auto 0.32rem; position: relative;}
  .orderlist ul { overflow: hidden;}
  .orderlist li{float: left; display: inline; font-size: 0.24rem; width: 1.5rem; padding-top: 0.4rem; text-align: center;}
  .orderlist li a{display: inline-block; width: 100%; height: 100%; color: #000;}
  .orderlist li em{font-style: normal;}
  .orderlist .icon1{width: 0.46rem; height: 0.39rem; background: url('../assets/sp/9.png') no-repeat 0 0; background-size: 0.46rem;}
  .orderlist .icon2{width: 0.45rem; height: 0.39rem; background: url('../assets/sp/8.png') no-repeat 0 0; background-size: 0.45rem;}
  .orderlist .icon3{width: 0.48rem; height: 0.39rem; background: url('../assets/sp/7.png') no-repeat 0 0; background-size: 0.48rem;}
  .orderlist .icon4{width: 0.4rem; height: 0.39rem; background: url('../assets/sp/6.png') no-repeat 0 0; background-size: 0.4rem;}
  .orderlist .icon5{width: 0.34rem; height: 0.38rem; background: url('../assets/sp/5.png') no-repeat 0 0; background-size: 0.34rem;}

  .msglist{font-size: 0.24rem; padding-top: 0.4rem;}
  .msglist p{display: inline-block; position: relative;}
  .msglist p .message{top: 0.2rem; right: -0.3rem;}
  .msglist a{color: #1a1a1a; display: inline-block; width: 100%; height: 100%;}
  .msglist li{height: 0.9rem; line-height: 0.9rem; border-bottom: 0.01rem solid #dfdfdf; position: relative;}
  .msglist li:last-child{border-bottom: none;}
  .msglist em{color: #a7a7a7; font-style: normal; float: right; margin-right: 0.2rem;}
  .msglist span{display: inline-block;  vertical-align: middle; margin: 0 0.25rem;}
  .msglist .icon-msg{ width: 0.27rem; height: 0.31rem; background: url('../assets/sp/3.png') no-repeat 0 0; background-size: 0.27rem; }
  .msglist .icon-add{ width: 0.23rem; height: 0.33rem; background: url('../assets/sp/1.png') no-repeat 0 0; background-size: 0.23rem; }
  .msglist .icon-question{ width: 0.27rem; height: 0.27rem; background: url('../assets/sp/2.png') no-repeat 0 0; background-size: 0.27rem; }
</style>
