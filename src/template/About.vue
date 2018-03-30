<template>
  <div id="app">
    
    <!--轮播 S-->
    <div class='lunbo'>
      <ul>
        <li><img src="../assets/img1.jpg"></li>
      </ul>
    </div>
    <!--轮播 E-->

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
  .nav{height: 1.52rem; padding-top: 0.28rem; text-align: center; font-size: 0; -webkit-text-size-adjust:none;}
  .nav li{ display: inline-block; font-size: 0.24rem; margin:0 0.46rem;}
  .nav li span{display: block; width: 0.8rem; margin-bottom: 0.2rem;}
</style>
