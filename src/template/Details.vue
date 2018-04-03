<template>
	<div class='details'>

		<!-- 轮播图 S-->
		<div class="swiper-container">
       		<div class="swiper-wrapper">
       			<div v-for='item in bannerPic' class="swiper-slide"><img :src="item"></div>
       		</div>
       		<div class='now_index'>
       			{{nowidx}}/{{bannerPic.length}}
       		</div>
       	</div>
		<!-- 轮播图 E-->
		
		<!--商品详情 S-->
		<div class='wp_details'>
			<h2>{{title}}</h2>
			<p>{{describe}}</p>
		</div>
		<div class='price_xl'>
			<div class='price'>
				<span class='nowPrice'>{{price | price}}</span>
				<del class='deletePrice'>{{delPrice | price}}</del>
			</div>	
			<div class='jqxl'>
				<span class='zkc'>总库存：{{kucun}}</span>
				<span class='xl'>近期销量：{{xl}}</span>
			</div>
		</div>
		<!--商品详情 E-->

		<!--商品tab S-->
		<div class='nav' id='nav'>
			<a @click='navButtonClick("商品介绍")' :class="{select : tab=='商品介绍'}" href="javascript:;">商品介绍</a>
			<a @click='navButtonClick("规格参数")' :class="{select : tab=='规格参数'}" href="javascript:;">规格参数</a>
			<a @click='navButtonClick("买家评论")' :class="{select : tab=='买家评论'}" href="javascript:;">买家评论</a>
		</div>
		<!--商品tab E-->

		<!--商品图片list S-->
		<div v-show='tab == "商品介绍"' class='wpdetails' id='wpdetails' style='display:nones;'>
			<div v-if="wpdescribePic.length <= 0" class='no-message'>没有商品介绍！</div>
			<div v-if="wpdescribePic.length > 0">
				<img v-for="(value, key) in wpdescribePic" :src="value">
			</div>
		</div>
		<!--商品图片list E-->

		<!--规格参数 S-->
		<div v-show='tab == "规格参数"' class='aboutwp' id='aboutwp' style='display:none;'>
			<div v-if="Object.keys(goods_msg).length <= 0" class='no-message'>没有规格参数！</div>
			<table v-if="Object.keys(goods_msg).length > 0"  border='1' cellspacing='0' cellpadding='0'>
				<tr>
					<td colspan='2'>产品信息</td>
				</tr>
				<tr v-for='(value,key) in goods_msg'>
					<td>{{key}}</td>
					<td>{{value}}</td>
				</tr>
			</table>
		</div>
		<!--规格参数 E-->
		
		<!--评论 S-->
		<div  v-show='tab == "买家评论"' class='pinlun' id='pinlun' style='display:none;'>
			<div v-if="userpinlun.length <= 0" class='no-message'>暂时还没有评论</div>
			<div v-if="userpinlun.length > 0" class='toppl'>
				<div class='pinlun_val'>
					评论（{{userpinlun.length}}条）
				</div>
				<div class='zhpj'>
					<h2>综合评价</h2>
					<ul class='star'>
						<li v-for='item in zhpj'><img src="../assets/star_c.png"></li>
					</ul>
				</div>
			</div>
			<div class='userpinlun' v-for='item in userpinlun'>
				<div class='userpl'>
					<dl>
						<dt><span><img :src="item.usertx"></span></dt>
						<dd>
							<span class='username'>{{item.userName}}</span>
							<span class='pltime'>{{item.pltime}}</span>
						</dd>
					</dl>
				</div>
				<ul class='star'>
					<li v-for='star in item.starval'><img src="../assets/star_c.png"></li>
				</ul>
				<p class='user_text'>{{item.pinlun}}</p>
				<div class='user_pic'>
					<ul>
						<li v-for='pic in item.pinlunPic'><img :src="pic"></li>
					</ul>
				</div>
				<div class='buyTime'>
					<ul>
						<li>类别：{{item.type}}</li>
						<li>购买日期：{{item.buyTime}}</li>
					</ul>
				</div>
			</div>
		</div>
		<!--评论 E-->
		
		<!--底部导航 S-->
		<div class='bot_nav'>
			<a class='a1' href="#"><span class='kf'></span>客服</a>
			<a class='a2' href="#"><span class='gouwuche'><em>15</em></span>购物车</a>
			<a class='a3' @click='showtc("加入购物车")' href="javascript:;" title='加入购物车'>加入购物车</a>
			<a class='a4' @click='showtc("立即购买")' href="javascript:;" title='立即购买'>立即购买</a>
		</div>
		<!--底部导航 E-->

		<!--立即购买和加入购物车弹窗 S-->
		<div v-show="isShowtc" class='tc' style='display:none;'>
			<div class='buy_intoCar'>
				<div class='goods_banner'>
					<dl>
						<dt><span><img src="../assets/pic6.jpg"></span></dt>
						<dd>
							<p>CF最新枪战模型X战1</p>
							<p class='price'>￥229</p>
						</dd>
					</dl>
				</div>
				<div class='goods-type'>
					<ul>
						<li>
							<h2>颜色</h2>
							<p>
								<span>白色</span>
								<span>蓝色</span>
							</p>
						</li>
						<li>
							<h2>尺码</h2>
							<p>
								<span>200cm</span>
								<span>100cm</span>
							</p>
						</li>
						<li>
							<h2>分辨率</h2>
							<p>
								<span>普通(100*1000)</span>
								<span class='select'>高清(2000*2000)</span>
								<span class='unselect'>高清(2000*2000)</span>
							</p>
						</li>
					</ul>
				</div>
				<div class='goods-value'>
					<dl>
						<dt>数量</dt>
						<dd>
							<div>
								<span>-</span>
								<strong>1</strong>
								<span>+</span>
							</div>
							<em>(库存: 50)</em>
						</dd>
					</dl>
				</div>
				<a class='button' :class='buttonText == "加入购物车"? "car" : "buy"' href="javascript:;">{{buttonText}}</a>
				<a @click='closetc' class='tc-close' href="javascript:;">×</a>
			</div>
		</div>
		<!--立即购买和加入购物车弹窗 E-->

	</div>
</template>
<style scoped>
	.buy_intoCar{height: 8.86rem; width: 7.5rem; background: #fff; position: absolute; bottom: 0; left: 0; z-index: 9999;}
	.goods_banner{height: 2.25rem; border-bottom: 0.01rem solid #dddddd; position: relative;}
	.goods_banner dl{display: flex;}
	
	.goods_banner dt{width: 2.38rem; height: 2.38rem; background: #fff; margin: -0.5rem 0 0 0.2rem; border: 0.01rem solid #dddddd; display: table; position: relative;}
	.goods_banner dt span{ width: 1.98rem;  margin: 0 auto; vertical-align: middle; display: table-cell; text-align: center; }
	.goods_banner dt span img{width: 1.98rem; display: inline;}
	.goods_banner dd{width: 5.12rem; font-size: 0.28rem; }
	.goods_banner dd .price{color: #fb4c45;}
	.goods_banner dd p{padding: 0.4rem 0 0 0.46rem;}
	.goods-type h2{font-size: 0.26rem; color: #6e6e6e; padding-left: 0.27rem; font-weight: normal;}
	.goods-type p{font-size: 0.26rem; color: #6e6e6e; margin-bottom: 0.17rem; display: flex; flex-wrap:wrap; }
	.goods-type span{ height: 0.54rem; padding: 0 0.08rem; text-align: center; line-height: 0.54rem; display: inline-block; color: #000; border: 0.01rem solid #c1c2c4; border-radius: 0.05rem; margin:0.14rem 0 0 0.24rem; }
	.goods-type li{margin-top: 0.3rem;}
	.goods-type .unselect{background: #ddd; color: #c1bfbf; border-color: #ddd;}
	.goods-type .select{background: #fb4c45; color: #fff; border-color: #fb4c45;}
	.goods-value dl{display: flex; font-size: 0.26rem; color: #6e6e6e; padding-top: 0.3rem;}
	.goods-value dd div{ text-align: center; line-height: 0.53rem; font-size: 0; display: inline-block; }
	.goods-value dd span{vertical-align: middle; display: inline-block; width: 0.53rem; height: 0.53rem; border: 0.01rem solid #d6d6d6; font-size: 0.4rem; }
	.goods-value dd strong{font-size: 0.33rem; color: #000; display: inline-block; width: 1.08rem; height: 0.53rem; font-weight: normal; border-top:0.01rem solid #d6d6d6; border-bottom: 0.01rem solid #d6d6d6; vertical-align: middle; }
	.goods-value dd em{font-style: normal; color: #000; vertical-align: -0.1rem; display: inline-block; padding-left: 0.23rem;}
	.goods-value dt{padding-left: 0.24rem; width: 3.23rem; line-height: 0.6rem;}
	.buy_intoCar .button{position: absolute; bottom: 0; left: 0; width: 100%; height: 1rem; line-height: 1rem; text-align: center; font-size: 0.32rem;}
	.buy_intoCar .buy{background: #fb4c45; color: #fff;}	
	.buy_intoCar .car{background: #fc9320; color: #fffeff;}	



	.details{overflow: hidden; padding-bottom: 0.1rem;}
	.details .now_index{width: 0.5rem; height: 0.5rem; background: rgba(85,84,80, 0.5); border-radius: 50%; font-size: 0.24rem; color: #fff; text-align: center; line-height: 0.5rem; position: absolute; bottom: 0.3rem; right: 0.3rem; z-index: 9990; }
	.details .wp_details,.details .price_xl{width: 7.1rem; margin: 0 auto; overflow: hidden;}
	.details .wp_details h2{font-size: 0.28rem; font-weight: normal; margin: 0.34rem 0;}
	.details .wp_details p{font-size: 0.24rem; color: #a6a6a6; line-height: 0.35rem;}
	.details .price_xl{font-size: 0.24rem; color: #6e6e6e; padding-top: 0.3rem;}
	.details .jqxl{float: right; padding-top: 0.22rem;}
	.details .price{float: left;}
	.details .price span,.details .jqxl .zkc{margin-right: 0.3rem;}
	
	.details .nav{padding-top: 0.8rem; overflow: hidden;}
	.details .nav a{height: 0.9rem; width: 2.5rem; display:block; float: left; text-align: center; line-height: 0.9rem; font-size: 0.28rem; color: #000; border-bottom: 0.01rem solid #dddddd;}
	.details .nav .select{border-color: red;}
	
	.details .pinlun{padding: 0 0.2rem 1.1rem;}
	.details .aboutwp{font-size: 0.26rem; text-align: center; margin-top: 0.2rem;}
	.details .aboutwp table{border-color: #e2e2e2; margin: 0 auto;}
	.details .aboutwp table td{height: 0.48rem;}
	.details .aboutwp tr :nth-child(odd){width: 1.96rem;}
	.details .aboutwp tr :nth-child(even){width: 5.11rem;}
	
	.details .toppl{height: 0.88rem; line-height: 0.88rem;}
	.details .pinlun{font-size: 0.24rem;}
	.details .pinlun_val{float: left; color: #a6a6a6;}
	.details .zhpj{float: right; }
	.details .zhpj h2{font-size: 0.26rem; font-weight: normal;}
	.details .zhpj h2, .details .zhpj ul{float: left;}
	.details .star{height: 0.88rem; line-height: 0.88rem;}
	.details .star li{width: 0.24rem; display: inline-block; margin-left: 0.1rem;}
	.details .userpl dl{overflow: hidden; height: 0.94rem; line-height: 0.94rem; border-bottom: 0.01rem solid #dddddd;}
	.details .userpl dt,.details  .userpl dd{float: left;}
	.details .userpl dt span{display: block; width:0.54rem; margin-top: 0.2rem;}
	.details .userpl dt img{border-radius: 50%;}
	.details .userpl dt{ width: 0.7rem;}
	.details .userpl dd{width: 6.4rem;}
	.details .userpl .username{float: left;}
	.details .userpl .pltime{float: right;}
	.details .user_pic ul{text-align: center; padding-top: 0.1rem;}
	.details .user_pic li{border: 0.01rem solid #dddddd; display: block; float: left; width: 2.18rem; margin: 0.1rem 0.1rem 0 0;}
	.details .buyTime li{float: left;}
	.details .buyTime{overflow: hidden; padding-top: 0.3rem; clear: both;} 
	.details .buyTime ul :nth-child(2){float: right;}
	.details .userpinlun{overflow: hidden; margin-bottom: 0.6rem;}
	.details .user_text{text-align: justify;}
	.details .bot_nav{position: fixed; bottom: 0; left: 0; width: 100%; height: 1.1rem; background: #fff; font-size: 0.22rem; z-index: 9990;}
	.details .bot_nav a{color: #000; display: block; float: left; position: relative; height: 100%; text-align: center; overflow: hidden;}
	.details .bot_nav span{display: block; margin: 0.25rem auto 0;}
	.details .bot_nav .kf{width: 0.37rem; height: 0.38rem; background: url('../assets/kf.png') no-repeat 0 0; background-size: 0.37rem;}
	.details .bot_nav .gouwuche{ width: 0.38rem; height: 0.35rem; background: url('../assets/sp/n3.jpg') no-repeat 0 0; background-size: 0.38rem;}
	.details .bot_nav .a1, .details .bot_nav .a2{width: 1.57rem;}
	.details .bot_nav .a3,.details .bot_nav .a4{width: 2.18rem; line-height: 1.1rem; color: #fff; font-size: 0.32rem;}
	.details .bot_nav .a3{background: #fc9220;}
	.details .bot_nav .a4{background: #fb4c45;}
	.details .bot_nav em{font-style: normal; display: block; position: absolute; top: 0.2rem; right: 0.45rem; width: 0.28rem; height: 0.28rem; background: #fb4c45; color: #fff; border-radius: 50%; font-size: 0.16rem; line-height: 0.28rem;}

	.nowPrice{color: #fb4c45; font-size: 0.44rem;}
	.deletePrice{color: #a6a6a6; font-size: 0.2rem;}

	.wpdetails,.aboutwp{padding-bottom: 1.1rem;}
	.no-message{text-align: center; height: 3rem; line-height: 3rem; color: #a6a6a6; font-size: 0.3rem;}
</style>
<script>
	
	import Swiper from '../js/libs/swiper-3.4.2.min.js'

	/*pic*/
	import img0 from '../assets/img0.jpg'

	import b1 from '../assets/1.jpg'
	import b2 from '../assets/2.jpg'
	import b3 from '../assets/3.jpg'

	import tx from '../assets/sb.png'
	import pic6 from '../assets/pic6.jpg'
	export default{
		data(){
			return {
				isShowtc : false,
				buttonText : '',
				tab : '商品介绍',
				nowidx : 1,	//轮播图的下标
				bannerPic : [
					img0,
					img0,
					img0
				],
				title : 'CF最新枪战模型X战1',
				describe : 'CF最新最潮的枪支，没有一直比这个还要厉害，这是最新出版的最厉害的了，快来买吧。',
				price : 299,
				delPrice : 259,
				kucun : 50000,
				xl : 2000,
				wpdescribePic : [
					'/dist/1.jpg',
					'/dist/2.jpg',
					'/dist/3.jpg'
				],
				zhpj : 3,
				goods_msg : {
					'产品名':'穿越火线-灵狐者之保卫者',
					'出品商':'威酷模玩',
					'型号':'VC-CF-03',
					'规格':'十二寸可动人偶',
					'材料':'PVC+合金+纺织物',
					'可动性':'超可动穿戴拆卸',
					'适合年龄':'15+'
				},
				userpinlun : [
					 {
						usertx : tx,
						userName : '黄建豪',
						pltime : '2016-09-15',
						starval : 4,
						pinlun : 'CF最新最潮的枪支，没有一直比这个还要厉害，这是最新出版的最厉害的了，快来买吧!',
						pinlunPic : [pic6,pic6,pic6,pic6],
						type : '红色',
						buyTime : '2016-09-15'
					},
					{
						usertx : tx,
						userName : '黄建豪',
						pltime : '2016-09-15',
						starval : 4,
						pinlun : 'CF最新最潮的枪支，没有一直比这个还要厉害，这是最新出版的最厉害的了，快来买吧!',
						pinlunPic : [pic6,pic6,pic6,pic6],
						type : '红色',
						buyTime : '2016-09-15'
					}
				]
			}
		},
		methods : {
			navButtonClick : function(text){
				this.tab = text;
			},
			showtc : function(text){
				this.buttonText = text;
				this.isShowtc = true;
			},
			closetc : function(){
				this.isShowtc = false;
			}
		},
		mounted : function(){
			var self = this;
			new Swiper('.swiper-container', {
		        pagination: '.swiper-pagination',
		        paginationClickable: true,
		        onSlideChangeStart:function(swiper){
		        	self.nowidx = swiper.activeIndex+1;
		        }
		    });  
		}
	}
</script>