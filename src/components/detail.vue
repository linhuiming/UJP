<template>

    <div class="swipediv">
      <!--商品详情轮播-->
      <swipe class="my-swipe">
        <swipe-item v-for="data in looplist" :key="data.id">
          <img :src="data" alt="" width="100%" height="100%">

        </swipe-item>
      </swipe>
      <!--商品标题-->
      <div class="goodstitle">
        <h1 class="h1title">
          {{database.goods_name}}
        </h1>
      </div>
      <!--商品价格-->
      <div class="goodsprice">

          <span class="nowprice">¥{{database.goods_price}}</span>
          <del class="beforeprice">¥{{database.market_price}}</del>
          <span class="sold">已售{{database.sold_number}}件</span>
      </div>
      <div class="adver">
        <span v-for="(data,index) in dataservices" class="a">
          <i class="iconfont icon-information"></i>
          {{dataservices[index].desc}}
        </span>
        <i class="iconfont icon-more"></i>
      </div>
      <div class="grey"></div>
      <!--商品样式-->
      <div class="goodsstyle">
        <span>{{database.default_selected_product}}</span>
        <i class="iconfont icon-more"></i>
      </div>
      <div class="grey"></div>
      <!--商品厂家-->
      <div class="goodsfactory">
        <div class="factory">
          <div class="factorylogo">
            <img :src="databrand.logo" alt="">
          </div>
          <div class="factoryname">
            <div class="brand">{{databrand.name}}</div><i class="iconfont icon-more i2"></i>
            <span>
              <i class="iconfont icon-map"></i>
              {{databrand.country}}
              <em>{{databrand.position}}</em>
            </span>
          </div>
        </div>
        <div class="factoryothers">
          查看在售商品{{databrand.goods_count}}件
        </div>
      </div>
      <div class="grey"></div>
      <!--商品属性-->
      <div class="goodsproperty">
        <div class="text">商品属性</div>
        <div class="propertytable">
          <table width="100%" border="0" cellpadding="0" cellspacing="0">
            <tr v-for="data in dataattributes">
              <td class="title" >
                净重
              </td>
              <td class="con" >
                {{dataattributes.净重}}
              </td>
            </tr>

          </table>
        </div>
      </div>
      <!--商品详情-->
      <div class="text">商品详情</div>
      <div class="goodsimg">
        <p style="padding: 16px 8px 0" v-for="data in dataslices">
          <img :src="data.image" alt="" width="100%" class="lazyload">
        </p>
      </div>
      <div class="grey"></div>
      <!--注意事项-->
      <div class="goodsnotice">
        <div class="text">注意事项</div>
        <ul>
          <li >{{database.tips}}</li>
        </ul>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import { Swipe, SwipeItem } from 'vue-swipe';
  import axios from "axios";
  require('vue-swipe/dist/vue-swipe.css');
  export default{
		name:'detail',
		data(){
			return{
         looplist:[],
         database:[],
         dataservices:[],
         databrand:[],
         dataattributes:[],
          dataslices:[],
			}
		},
    mounted(){
      axios.get(`/api/v4/goods/${this.$route.params.id}`).then(res =>{
         console.log(res.data.data.attributes);
         this.looplist = res.data.data.splash;
        this.database = res.data.data;
        this.dataservices = res.data.data.services;
        this.databrand =res.data.data.brand;
        this.dataattributes =res.data.data.attributes;
        this.dataslices =res.data.data.story.slices;
      }).catch(error =>{
      })
    },
    components:{
      'swipe':Swipe,
      'swipe-item':SwipeItem
    }
	}
</script>

<style lang="scss" scoped>
  .my-swipe {
    height: 360px;
    color: #fff;
    font-size: 30px;
    text-align: center;
    margin-top: 56px;
  }
  .h1title{
    font-size: 17px;
    color: #4f494b;
    line-height: 24px;
    padding-left: 16px;
  }
  .goodsprice{
    font-size: 21px;
    color: #e74c3c;
    padding: 16px 8px 16px 16px;
  }
  .nowprice{
    font-size: 21px;
    color: #e74c3c;
  }
  .beforeprice{
    font-size: 13px;
    color: #bebdbb;
    padding-left: 8px;
  }
  .sold{
    font-size: 13px;
    color: #bebdbb;
    margin-top: 7px;
    float: right;
  }
  .adver{
    padding-right: 16px;
  }
  .a{
    display: inline-block;
    margin: 6px 0 6px 16px;
    margin-left: 16px;
    font-size: 12px;
  }
  .icon-more{
    float: right;
    font-size: 25px;
  }
  .grey{
    background:#ccc;
    height: 10px;
  }
  .goodsstyle{
    line-height: 52px;
    font-size: 13px;
    background: #fff;
    padding: 0 16px 0 16px;
  }
  .factory{
    padding-left: 16px;
    margin-right: 30px;
    padding-bottom: 16px;
  }
  .factorylogo{
    width: 53px;
    height: 53px;
    border-radius: 50%;
    float: left;
    margin-right: 16px;
  }
  .factorylogo img{
    border-radius: 50%;
    width: 53px;
    height: 53px;
    margin-right: 16px;
  }
  .brand{
    font-size: 14px;
    margin-bottom: 8px;
    padding-top: 7px;
    color: #4f494b;
  }
  .factoryname{
    margin-right: -15px;
  }
  .factoryname span i,em{
    font-size: 12px;
  }
  .i2{
    position: relative;
    padding-bottom: 7px;
    bottom:14px;
  }
  .factoryothers{
    height: 44px;
    line-height: 44px;
    text-align: center;
    color: #4f494b;
    border-top: 1px solid #e6e6e6;
  }
  .goodsproperty{
    background: #fff;
    margin-top: 10px;
    padding-top: 8px;
  }
  .text{
    color: #4f494b;
    font-size: 17px;
    line-height: 38px;
    padding-left: 16px;
  }
  .propertytable tr{
    border-bottom: 1px solid black;
    width: 100%;
  }
  .propertytable td{
    padding: 13px 5px;
    line-height: 20px;
    border-top: 1px solid black;

  }
  .title{
    width: 50px;
    text-align: center;
    border-right: 1px solid black;
  }
  .goodsimg{
    padding-bottom: 40px;
    color: #47494b;
  }
</style>
