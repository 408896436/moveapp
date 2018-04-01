<template>
  <div id="app">
    
    <!--轮播 S-->
    <div class='lunbo'>
      <ul>
        <li><img src="../assets/img1.jpg"></li>
      </ul>
    </div>
    <!--轮播 E-->
    
    <!--导航 S-->
    <div class='nav'>
        <ul>
          <li><router-link to="/goodstype"><span><img src="../assets/icon1.png"></span>衣服</router-link></li>
          <li><router-link to="/goodstype"><span><img src="../assets/icon2.png"></span>手办</router-link></li>
          <li><router-link to="/goodstype"><span><img src="../assets/icon3.png"></span>皮具</router-link></li>
          <li><router-link to="/goodstype"><span><img src="../assets/icon4.png"></span>抱枕</router-link></li>
        </ul>
    </div>
    <!--导航 E-->

    <!--商品版块 S-->
    <div class='goodslist'>
        <div class='goods'>
           <h2>衣服<router-link class='more' to="/personal">更多 ></router-link></h2>
           <div class='goods-ctx'>
              <ul>
                <li>
                   <router-link to="/personal">
                     <dl>
                       <dt><img src="../assets/img2.jpg"></dt>
                       <dd>
                         <p>CF最新枪战模型X战1</p>
                         <p><span>￥229</span><del>￥259</del></p>
                       </dd>
                     </dl>
                   </router-link>
                </li>
                <li>
                   <router-link to="/personal">
                     <dl>
                       <dt><img src="../assets/img3.jpg"></dt>
                       <dd>
                         <p>CF最新枪战模型X战1</p>
                         <p><span>￥229</span><del>￥259</del></p>
                       </dd>
                     </dl>
                   </router-link>
                </li>
                <li>
                   <router-link to="/personal">
                     <dl>
                       <dt><img src="../assets/img2.jpg"></dt>
                       <dd>
                         <p>CF最新枪战模型X战1</p>
                         <p><span>￥229</span><del>￥259</del></p>
                       </dd>
                     </dl>
                   </router-link>
                </li>
                <li>
                   <router-link to="/personal">
                     <dl>
                       <dt><img src="../assets/img3.jpg"></dt>
                       <dd>
                         <p>CF最新枪战模型X战1</p>
                         <p><span>￥229</span><del>￥259</del></p>
                       </dd>
                     </dl>
                   </router-link>
                </li>
              </ul>
           </div>
        </div>
        <div class='goods'>
           <h2>手办<router-link class='more' to="/personal">更多 ></router-link></h2>
           <div class='goods-ctx'>
              <ul>
                <li>
                   <router-link to="/personal">
                     <dl>
                       <dt><img src="../assets/img2.jpg"></dt>
                       <dd>
                         <p>CF最新枪战模型X战1</p>
                         <p><span>￥229</span><del>￥259</del></p>
                       </dd>
                     </dl>
                   </router-link>
                </li>
                <li>
                   <router-link to="/personal">
                     <dl>
                       <dt><img src="../assets/img3.jpg"></dt>
                       <dd>
                         <p>CF最新枪战模型X战1</p>
                         <p><span>￥229</span><del>￥259</del></p>
                       </dd>
                     </dl>
                   </router-link>
                </li>
                <li>
                   <router-link to="/personal">
                     <dl>
                       <dt><img src="../assets/img2.jpg"></dt>
                       <dd>
                         <p>CF最新枪战模型X战1</p>
                         <p><span>￥229</span><del>￥259</del></p>
                       </dd>
                     </dl>
                   </router-link>
                </li>
                <li>
                   <router-link to="/personal">
                     <dl>
                       <dt><img src="../assets/img3.jpg"></dt>
                       <dd>
                         <p>CF最新枪战模型X战1</p>
                         <p><span>￥229</span><del>￥259</del></p>
                       </dd>
                     </dl>
                   </router-link>
                </li>
              </ul>
           </div>
        </div>
    </div>
    <!--商品版块 E-->

    <nav-bottom></nav-bottom>

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
  .lunbo img{display: block; width: 100%;}
  .nav{height: 1.7rem; padding-top: 0.28rem; text-align: center; font-size: 0; -webkit-text-size-adjust:none;}
  .nav a{color: #000;}
  .nav li{ display: inline-block; font-size: 0.24rem; margin:0 0.46rem;}
  .nav li span{display: block; width: 0.8rem; margin-bottom: 0.2rem;}
  .goods h2{font-size: 0.3rem; font-weight: normal; padding: 0 0.2rem; margin-bottom: 0.2rem; }
  .goods h2:before{content: ''; display: inline-block; width: 0.05rem; height: 0.28rem; background: #fb4c45; margin-right: 0.09rem; vertical-align: -0.03rem;}
  .goods a{color: #000;}
  .goods h2 a{float: right;}
  .goods-ctx ul{font-size: 0; -webkit-text-size-adjust:none;}
  .goods-ctx li{width: 3.7rem; font-size: 0.24rem; padding-bottom: 0.4rem; }
  .goods-ctx ul li:nth-child(odd){float: left;}
  .goods-ctx ul li:nth-child(even){float: right;}
  .goods-ctx dd{padding: 0.1rem 0 0 0.2rem;}
  .goods-ctx dd p{padding: 0.05rem 0;}
  .goods-ctx dd span{color: #fb4c45;}
  .goods-ctx dd del{color: #a6a6a6; font-size: 0.2rem; padding-left: 0.22rem;}
</style>
