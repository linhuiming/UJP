<template>
      <div>
     <swipe class="my-swipe">
       <swipe-item v-for="data in looplist" :key="data.id">
        <img :src='data.cover'/><!--.cover-->
       </swipe-item>
     </swipe>   
      
        <ul>
          <li v-for="data in tablist" class="new">
          	<img :src='data.tab_icon'/>
          <!--   <p>{{data.name}}</p> -->
          </li>
        </ul>

      <ul>
        <li class="pic">
        <img :src="pic2.cover"><!--.cover-->
        </li>
      </ul>

       <ul class="time">
        	<li><img :src="time.goods_thumbnail"/></li>
        	<li class="price">￥{{time.seckill_price}}</li>
        <li class="seckilling">
            <h3>秒杀专区</h3>
        	<p>{{time.title}}</p>
        </li>
      </ul>
      <ul >
        <li><img :src="headset.cover" class="pic3"/></li><!--.cover-->
     </ul>
<!--***********************************************罗文延修改**************************************************-->
     <ul class="voicebox">
     	<li v-for="(data,index) in headsets">
        <img :src="headsets[index].thumbnail" /><!--.thumbnail-->
        <h3>{{headsets[index].goods_name}}</h3>
        <p>￥{{headsets[index].goods_price}}<span>￥{{headsets[index].market_price}}</span></p>
     	</li>
     </ul>
        <ul >
        <li><img :src="home.cover" class="pic3"/></li>
     </ul>
     <ul class="voicebox">
     	<li v-for="(data,index) in homes">
        <img :src="homes[index].thumbnail" /><!--.thumbnail-->
        <h3>{{homes[index].goods_name}}</h3>
        <p>￥{{homes[index].goods_price}}<span>￥{{headsets[index].market_price}}</span></p>
     	</li>
     </ul>
<!--***********************************************罗文延修改**************************************************-->
     <div v-for="(data,index) in girl" class="girl">

     	<p class="title">{{girl[index].name}}</p>
     	<ul>
     		<li v-for="data in girl[index].goods_list" class="intro">
     			<img :src="data.thumbnail"/>
     			<p>{{data.selling_point}}</p>
     			<p>{{data.goods_name}}</p>
     			<p class="p3">￥{{data.market_price}} <span>￥{{data.goods_price}}</span></p>
     		</li>
     		<li class="end">
     			<p class="p1">{{girl[index].name}}</p>
     			<p>还有{{girl[index].goods_amount}}件生活好物</p>
     			<p></p>


     		</li>

     	</ul>
     </div>
     </div>
  </template>

  <script>
  import axios from "axios";
  import { Swipe, SwipeItem } from 'vue-swipe';
  require('vue-swipe/dist/vue-swipe.css');
     export default{
      name:"home",
      data(){
        return {
       looplist:[],
       tablist:[],
       pic2:[],
       time:[],
       number:[],
       headset:[],
       headsets:[],
       home:[],
       homes:[],
       girl:[]
       
       //存放我循环的数组
        }
      },
      mounted(){
         axios.get("/api/v5/home").then(res=>{
          // console.log(res.data.data.splash_list);//返回的数据
          this.looplist =  res.data.data.splash_list;
         
         }).catch(error=>{

         })

         fetch("/api/v5/home").then(res=>res.json())
         .then(res=>{
          this.tablist = res.data.activity_list[0].tab_list;
          this.pic2 = res.data.activity_list[0];
          this.time = res.data.activity_list[1];
          this.number = res.time;
          this.headset = res.data.activity_list[1];

          console.log(res.data.activity_list[1].goods_list);
          this.headsets = res.data.activity_list[1].goods_list;

          this.home = res.data.activity_list[2];
          this.homes = res.data.activity_list[3].goods_list;
          this.girl = res.data.tag_list;
 
         })


         // fetch("/api/v5/home").then(res=>res.json())
         // .then(res=>{
         //  console.log(res.data.activity_list[1])
         // })
      },
      components:{
        'swipe':Swipe,
        'swipe-item':SwipeItem
      } 
     }
     
  </script>
  <style lang="scss">
        html,body{
          margin:0;
          padding:0;
          background: #eee;
       .my-swipe {
         height:235px;
       img{width:100%;
           padding-top:56px;
        }
      }

      .new{ 
        margin:5px 0px;    
      	img{width:33.3%; float:left}
     
      }
      .pic{
      	img{width:100%;
      		margin-top:5px;
      	}
      }

      .time{
      	display:flex;
      	justify-content: space-around;
      	
      	margin:0px 0;
      	background:white;
      	position: relative;
      	.price{
      		width:55px;
      		height:55px;
      		line-height: 55px;
      		border:1px dashed red;
      		border-radius:50%;
      		text-align: center;
            position:absolute;
            top:80px;
            left:40%;
            color:red;
      	}
      	.seckilling{
      		text-align: center;
      		line-height:30px;
      		margin-top: 40px;
      		h3{
      			font-size:20px;
      			font-weight: 300;
      			letter-spacing:12px;
      		}
      	}
      	li{
           width:50%;
      	img{width:90%}
      }
      }

      .pic3{
     
      			width:100%;
      			margin-top:5px;
      		}

      .voicebox{
      	width:100%;
      	display:flex;
      	justify-content: space-between;
      	overflow: scroll;
      	background:white;
      	-ms-overflow-style:none;
        overflow:-moz-scrollbars-none;
        color:#4F494B;

      	img{width:145px;
      		height:145px;
      	}

      	h3{
      		font-size:12px;
      		overflow:hidden;
      		white-space:nowrap;
      		text-overflow:ellipsis;
      		width:80%;
      	}

      	p{ 
      		color:#E74C3C;
      		padding-bottom:10px;
      		span{
      	    font-size:12px;
      		color:#4F494B;
      		text-decoration:line-through;
      	 }
      	}	
      }
    
     .girl{
     	
     	.title{
     	  clear:both;
     	  text-align: center;
          color: #4F494B;
          font-size: 15px;
          line-height:50px;

          
     	}
     	ul{
     		li{
     			width:48%;
     			float:left;
     			margin-left:2%;
     			img{
     				width:100%;
     				height:187px;

     			}

     	  }
     	  .intro{
     	  	margin-top:10px;
     	  	p{
     	  	padding: 5px 8px 0;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            background:white;
        }
        .p3{
        	padding: 0 8px 8px;
            color: #E74C3C;
            padding-top:16px;
            span{
            	font-size: 12px;
                color: #BEBDBB;
                margin-left: 10px;
                text-decoration: line-through;
            }
        }
     	  }

     	  .end{
     			background:white;
     			height:287px;
     			text-align: center;
                color: #4F494B;
                font-size:14px;
                margin-top:10px;
              .p1{
              	
              	font-size:18px;
              	border-bottom:2px solid #828282;
              	margin:10px 10%;
              	height:40px;
              	line-height:40px;
              	padding-top:20px;
              }
     		}

     	}
     }
    }
     
  </style>