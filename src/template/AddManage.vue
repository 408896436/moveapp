<template>
  <div>

     <!--没有收货地址的时候显示 S-->
     <div v-if='myAdd.length <= 0' class='noadd'>
       <dl>
         <dt><span class='icon'></span></dt>
         <dd>当前还没有地址，赶紧添加地址吧！</dd>
       </dl>
     </div>
     <!--没有收货地址的时候显示 E-->
     
     <!--地址 S-->
     <div class='add_list'>
        <ul>
          <li v-for='(value,key) in myAdd'>
            <p><span class='name'>{{value.name}}</span><em class='tel'>{{value.tel}}</em></p>
            <p class='add'>{{value.add}}</p>
            <p>
               <span><input type='radio' name='add'>默认地址</span>
               <span class='edit_add'>
                  <router-link to="/address"><em class='icon_edit'></em>编辑</router-link>
                  <a href="javascript:;"><em class='icon_del'></em>删除</a>
               </span>
            </p>
          </li>
        </ul>
     </div>
     <!--地址 E-->

     <router-link class='myadd' to="/address"><big>+</big> 新增收货地址</router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      myAdd : [{
        name : '黄志烁',
        tel : 13560344966,
        add : '广东省深圳市南山区科兴科学园C1广东省深圳市南山区科兴科学园C1'
      },{
        name : '小明',
        tel : 13560344966,
        add : '广东省深圳市南山区科兴科学园C1广东省深圳市南山区科兴科学园C1'
      }]
    }
  }
}
</script>

<style scoped>

   .myadd{display: block; width: 7.1rem; height: 0.8rem; margin: 0 auto; background: #fb4c45; line-height: 0.8rem; text-align: center; position: absolute; bottom: 0.2rem; left: 50%; -webkit-transform:translateX(-50%); font-size: 0.3rem; color: #fff; border-radius: 0.04rem;}

   .noadd dl{overflow: hidden; font-size: 0.28rem; text-align: center; padding-top: 3.4rem;}
   .noadd span{display: block; margin: 0 auto; width: 1.27rem; height: 1.27rem; background: url('../assets/sp/13.png') no-repeat 0 0; background-size: 1.27rem;}
   .noadd dd{padding-top: 1rem;}

   .add_list{font-size: 0.28rem; color: #1a1a1a;}
   .add_list .tel{font-style: normal; padding-left: 0.47rem;} 
   .add_list li{ margin-top: 0.36rem; border-bottom: 0.01rem solid #dddddd; box-shadow:0 0.14rem 0.1rem #ddd; }
   .add_list li p{  padding: 0 0.2rem 0.35rem 0.2rem; }
   .add_list .add{color: #6e6e6e; font-size: 0.24rem;}
   .add_list li p:nth-child(2){border-bottom: 0.01rem solid #dddddd;}
   .add_list input{margin: 0; margin-right: 0.17rem; vertical-align: -0.05rem;}
   .add_list li p:nth-child(3){padding-top: 0.24rem;}
   .add_list .edit_add a{color: #000; float: right;}
   .add_list .icon_del, .add_list .icon_edit{margin-right: 0.08rem; display: inline-block; height: 0.27rem; vertical-align: -0.05rem; }
   .add_list .edit_add .icon_del{width: 0.27rem; background: url('../assets/sp/14.png') no-repeat 0 0; background-size: 0.27rem;}
   .add_list .edit_add .icon_edit{width: 0.26rem; background: url('../assets/sp/15.png') no-repeat 0 0; background-size: 0.26rem; margin-left: 0.34rem;}
</style>
