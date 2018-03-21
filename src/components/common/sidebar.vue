<template>
	<transition name="bounce">
        <aside v-show="myshow">
            <ul @click="handleClick()">
                <div class="inputdiv">
                    <input type="text" class="inputsearch" placeholder="请输入搜索内容">
                    <div class="cancel">
                        取消
                    </div>
                </div>
                <p @click.stop="isshow1=!isshow1">美味餐厨</p>
                <ul v-show="isshow1">
                    <li>烹饪工具</li>
                    <li>厨房工具</li>
                    <!--<li>厨房电器</li>-->
                    <!--<li>餐具桌面</li>-->
                    <!--<li>水具酒具</li>-->
                    <!--<li>咖啡茶具</li>-->
                    <!--<li>烘焙烧烤</li>-->
                    <!--<li>吃货专列</li>-->
                </ul>
                <p @click.stop="isshow2=!isshow2">家纺家饰</p>
                <ul v-show="isshow2">
                    <li>家纺</li>
                    <li>装饰</li>
                </ul>
                <p>生活日用</p>
                <p>健康美体</p>
                <p>文具数码</p>
                <p>品牌</p>
            </ul>
        </aside>
    </transition>
</template>
<script src="../../../static/vue.js"></script>
<script type="text/ecmascript-6">
 


  export default{
		name:'sidebar',
		data(){
			return{
            isshow1:false,
                isshow2:false
			}
		},
    props:["myshow"],
      methods:{
          handleClick(){
              this.$emit("event")
          }
      },

	}




</script>

<style lang="scss" scoped>
    .bounce-enter-active {
        animation: bounce-in .5s;
    }
    .bounce-leave-active {
        animation: bounce-in .5s reverse;
    }
    @keyframes bounce-in {
        0% {
            transform:translateY(-100%);
            opacity: 0;
        }
        100% {
            transform:translateY(0px);
            opacity: 1;
        }
    }
    aside{
        position: fixed;
        left: 0;
        top:60px;
        width: 100%;
        height:300px;
        z-index: 1;
        overflow:scroll;
    }
    *{
        list-style: none;
        margin: 0;
        padding: 0;
    }
    .inputsearch{
        width: 80%;
        height: 24px;
        background: #ededed;
        border-radius: 20px;
        box-sizing: border-box;
        padding-left: 42px;
        color: #4F494B;
        display: inline-block;
        margin-left: 15px;
        border: none;
        margin-bottom: 2px;
    }
    ul p{
        height: 48px;
        overflow: hidden;
        padding-left: 15px;
        line-height: 48px;
        position: relative;
        border-top: 1px solid #E6E6E6;
        box-sizing: border-box;
    }
    .cancel{
        float: right;
        display: inline-block;
        margin-right: 15px;
    }
    .inputdiv{
        display: inline;
    }
    ul li{
        height: 48px;
        overflow: hidden;
        padding-left: 25px;
        line-height: 48px;
        /*position: relative;*/
        border-top: 1px solid #E6E6E6;
        box-sizing: border-box;
        font-size: 13px;
        color: #4F494B;
    }

</style>
