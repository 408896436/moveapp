<template>
  <div>
    <form>
      <ul>
        <li><p>收货人　<input type='text'></p></li>
        <li><p>联系电话<input type='text'></p></li>
        <li>
           <dl>
             <dt>所在地区</dt>
             <dd>
                <p>请选择 ></p>
             </dd>
           </dl>
        </li>
        <li><textarea placeholder='详细地址' style="resize:none;"></textarea></li>
        <li>设为默认地址<input class='checkbox' type='checkbox'></li>
      </ul>
    </form>
    <a class='save_add' href="javascript:;" title='保存收货地址 '>保存收货地址 </a>
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
    form li{ padding: 0.3rem 0; font-size: 0.28rem; padding-left: 0.2rem;cursor: pointer;}
    form input{text-indent: 0.2rem; font-size: 0.26rem; border:0; outline:none; }
    form textarea{display: inline-block; width: 5.37rem; font-size: 0.26rem; border-radius: 0.04rem; border:0; outline:none; }
    form dl{overflow: hidden;}
    form dt,form dd{float: left; display: inline;}
    form dt{ width: 1.3rem;}
    form dd p{float: right; color: #a6a6a6; margin-right: 0.2rem;}
    form dd{padding-left: 0.3rem; width: 5.65rem;}
    form li:last-child{border-bottom: none;}
    .save_add{position: absolute; bottom: 0.2rem; left: 50%; height:0.8rem; border-radius: 0.04rem; width: 7.1rem; background: #fb4c45; color: #fff; font-size: 0.3rem; text-align: center; line-height: 0.8rem; -webkit-transform:translateX(-50%);}
    .checkbox{display: inline-block; float: right; margin-right: 0.2rem;}
</style>
