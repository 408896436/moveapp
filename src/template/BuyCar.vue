<template>
  <div>
    <div class='empty'>
    	<span class='empty_icon'></span>
    	<p>购物车空无一物，赶紧去选购商品吧！</p>
    </div>
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
	.empty{font-size: 0.28rem; text-align: center; color: #1a1a1a; padding-top: 4.5rem;}
	.empty .empty_icon{display: block; width: 0.89rem; height: 0.78rem; background: url('../assets/sp/12.png') no-repeat 0 0; background-size: 0.89rem; margin: 0 auto 0.58rem;}
</style>
