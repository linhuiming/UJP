<template>
  <div>
    <navbar>
      <i class="iconfont icon-search" @click="isshow=!isshow"></i>

    </navbar>
    <sidebar :myshow="isshow" @event="isshow=false"></sidebar>
    <section>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
  import sidebar from "./components/common/sidebar"
  import navbar from "./components/common/navbar"

  export default {
  name: 'App',
    data(){
      return{
          isshow:false
      }
    },
    components:{
      sidebar,
      navbar
    }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  ul li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  img{
    border: none;
  }
</style>
