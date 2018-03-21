<template>
<div>
	<router-view></router-view>
	<div id="list">搜索"<span></span>"结果</div>
	<div id="sort">
		<div class="sort_a">人气排序</div>
		<div class="sort_a">价格排序</div>
	</div>
	<div id="load">
		<ul>
			<li v-for="data in looplist" @click="list_click(data.goods_id)">
				<img :src="data.thumbnail" width="100%">
				<div>{{data.selling_point}}</div>
				<div class="load_text">{{data.goods_name}}</div>
				<div>
					<span class="price">￥{{data.goods_price}}</span>
					<span class="originalPrice">{{data.market_price}}</span>
				</div>
			</li>
		</ul>
	</div>
</div>
</template>
<script>
import axios from "axios";
import router from "../router";
export default {
  name: 'list',
  data(){
	return {
		looplist:[],
		page:1
    }
  },
  methods:{
    list_click(data){
      console.log(data);
      router.push({name:"detail",params:{id:data}});

    }
  },
  mounted(){
  	//注意有斜线!  
  	//http://m.ujipin.com/api/v4/search/goods?page=1&q=%E5%AE%B6%E7%BA%BA
  	axios.get(`api/v4/search/goods?page=${this.page}&q=%E5%AE%B6%E7%BA%BA`).then(res=>{
  		console.log(res.data.data.goods_list); 
  		this.looplist = res.data.data.goods_list
  	}).catch(error=>{
  		console.log(error);
  	})
    document.addEventListener('scroll',()=>{
      if(document.documentElement.offsetHeight - document.documentElement.scrollTop == window.innerHeight){
        this.page++;
        fetch(`api/v4/search/goods?page=${this.page}&q=%E5%AE%B6%E7%BA%BA`).then(res=>{
          return res.json();
        }).then(res=>{
          this.looplist = [...this.looplist,...res.data.goods_list]
        })
        
      }
      //console.log(window.innerHeight)
      //console.log(document.documentElement.offsetHeight - document.documentElement.scrollTop)
    },true)
  }
  
}
</script>
<style scoped>
#list{
	z-index: 3;
	position:fixed;
	width:100%;
	height: 48px;
	top:48px;
    background: #fff;
    text-align: center;
    line-height: 48px;
    font-size: 14px;
    color: #828282;
}
#sort{
	z-index: 3;
	width:95%;
	top:96px;
	position:fixed;
	background:#fff;
	display: flex;
    height: 48px;
    background: #fff;
    padding: 0 2.8%;
}
#sort .sort_a{
	flex:1;
    text-align: center;
    line-height: 48px;
}
#load{
	overflow:hidden;
	margin-top:96px;
	background:#eee;
	overflow:scroll;
}
#load ul{
	padding: 0 5px 0 0;
}
#load li{
	width: 50%;
    overflow: hidden;
    float: left;
    position: relative;
    margin-top: 2%;
    border-radius: 5px;
    font-size: 13px;
    box-sizing: border-box;
    padding-left: 5px;
    height:250px;
    background:#fff;
}
#load li div{
	padding:0 5px;
}
.price{
	font-size:14px;
	color:#E74C3C;
}
.originalPrice{
	font-size: 12px;
    color: #BEBDBB;
    margin-left: 10px;
    text-decoration: line-through;
}
.load_text{
  height:34px;
}
</style>
