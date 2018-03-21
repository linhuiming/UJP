<template>
	<nav>
        <span class="logo">
            <img src="../../assets/logo_t.png" alt="" >
        </span>
        <div class="right">
            <slot></slot>
            <i class="iconfont icon-account"></i>
            <i class="iconfont icon-cart"></i>
        </div>
    </nav>
</template>

<script type="text/ecmascript-6">
 
  import axios from "axios";

  export default{
		name:'navbar',
		data(){
			return{
         
			}
		},

    
	}
</script>

<style lang="scss" scoped>
    nav{
        width: 100%;
        height: 56px;
        background: #31313C;
        /*background: grey;*/
        padding-left: 16px;
        position: fixed;
        left: 0;
        box-sizing: border-box;
        z-index: 10;
        top:0;
    }
    .logo{
        width: 65px;
        height: 20px;
        margin-top: 20px;
        display: inline-block;
    }
    img{
        width: 100%;
    }
    *{
        margin: 0;
        padding: 0;
    }
    .right{
        float: right;
    }
    i{
        display: inline-block;
        width: 46px;
        height: 56px;
        text-align: center;
        margin-right: 10px;
        margin-top: 12px;
        font-size: 30px;
        color: white;
    }

</style>
