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
      <div class="goodsstyle" @click="isshow=!isshow">
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
            <tr v-for="(data,key) of dataattributes">
              <td class="title1" >
                {{key}}
              </td>
              <td class="con" >
                {{data}}
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
          <li v-for="(data,index) in databasetips">.{{databasetips[index]}}</li>
        </ul>
      </div>
      <div class="grey"></div>
      <!--用户评价-->
      <div class="evaluate">
        <div class="text">
          用户评价
          <span>({{database.comment_count}})</span>
        </div>
        <ul>
          <li v-for="(data,index) in datacomments">
            <div class="information">
              {{datacomments[index].user_name}}
              <span class="time"></span>
            </div>
            <div class="con">
              {{datacomments[index].content}}
            </div>
          </li>
        </ul>
        <div class="more">
          查看全部评价
        </div>
      </div>
      <!--热卖推荐-->
      <!--<div class="sellwell">-->
        <!--<div class="text">热卖推荐</div>-->
        <!--<div class=""></div>-->
      <!--</div>-->
      <!--商品购买立即购买-->
      <div class="addcart">
        <p class="buynow">
          <span class="totalmoney">总价</span>
          <span class="redprice">¥ {{database.goods_price}}</span>
        </p>
        <div class="buybtn">立即购买</div>
      </div>

      <div class="choice-attr-box block" v-show="isshow">
        <div class="attr-box">
          <div class="attr-con">
            <div class="summary bt_dedede">
              <div class="img">
                <!--<img :src="{{dataproducts.image}}">-->
              </div>
              <div class="main">
                <div class="title">
                  {{database.goods_name}}
                </div>
                <i class="iconfont icon-close" @click="isshow=!isshow"></i>
                <div class="price"><span class="now">¥{{database.goods_price}}</span> <!-- <span class="old">¥90</span> --></div>
              </div>

            </div>
            <div class="properties"><div class="property color-classify bt_dedede">
              <div class="t">花色</div>
              <div class="items"><label class="">巧克力切片</label><label class="">绿茶切片</label></div></div>
              <div class="property color-classify bt_dedede"><div class="t">尺寸</div>
                <div class="items"><label class="checked">均码</label></div></div></div>
            <div class="property number bt_dedede"
                 style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">
              <div class="t">数量</div>
              <div class="content clearfix">
                <div class="number-control">
                  <button type="button" class="decrease over">-</button>
                  <input type="tel" class="num" value="1" disabled="disabled">
                  <button type="button" class="increase over">+</button>
                </div>
                <div class="tips"
                     style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">
                  库存仅剩1件
                </div>
              </div>
            </div>
          </div>
          <div class="add-cart">加入购物袋</div>
          <div class="close_attr-box"></div>
        </div>
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
         databasetips:[],
         datacomments:[],
         isshow:false,
         dataproducts:[],
			}
		},
    mounted(){
      axios.get(`/api/v4/goods/${this.$route.params.id}`).then(res =>{
        console.log(res.data.data.attributes);
        console.log(res.data.data.attributes.尺寸)
        this.looplist = res.data.data.splash;
        this.database = res.data.data;
        this.dataservices = res.data.data.services;
        this.databrand =res.data.data.brand;
        this.dataattributes =res.data.data.attributes;
        this.dataslices =res.data.data.story.slices;
        this.databasetips =res.data.data.tips;
        this.datacomments =res.data.data.comments;
        this.dataproducts =res.data.data.products.list;
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
  .title1{
    width: 50px;
    text-align: center;
    border-right: 1px solid black;
  }
  .goodsimg{
    padding-bottom: 40px;
    color: #47494b;
  }
  .goodsnotice ul{
    padding: 12px 16px 24px;
  }
  .goodsnotice ul li{
    font-size: 13px;
    color: #828282;
    line-height: 22px;
  }
  .text span{
    font-size: 12px;
    color: #a23e38;
    margin-left: 5px;
  }
  .evaluate ul{
    padding-bottom: 24px;
  }
  .evaluate ul li{
    padding: 0 16px;
  }
  .information{
    padding: 12px 0;
    font-size: 14px;
    color: #4f494b;
  }
  .con{
    font-size: 13px;
    color: #828282;
    line-height: 18px;
  }
  .more{
    text-align: center;
    padding: 17px 0;
    border-top: 1px solid #e6e6e6;
  }
  .addcart{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 48px;
    padding-left: 15px;
    z-index: 2;
    background-color: #fff;
  }
  .buynow{
    float: left;
    font-size: 15px;
    margin-top: 16px;
    color: #4F494B;
  }
  .totalmoney{
    font-size: 15px;
    color: #4F494B;
  }
  .redprice{
    color: #E74C3C;
  }
  .buybtn{
    float: right;
    height: 48px;
    width: 140px;
    background: #E74C3C;
    font-size: 15px;
    line-height: 48px;
    text-align: center;
    color: #fff;
  }



  .choice-attr-box { width: 90%; height: 90%; background: #fff; border-radius: 5px; position: fixed; left: 5%; top: 5%; z-index: 12;     transition: all .3s;
    -webkit-transition: all .3s;
    /*display: none;*/
  }
  .attr-box { width: 100%; height: 100%;  position: relative;}
  .add-cart { position: absolute; bottom: 20px; width: 90%; height: 50px; line-height: 50px;margin: 0 5%; font-size: 17px; background: #E74C3C; color: #fff; text-align: center; border-radius: 5px;}
  .attr-con { position: absolute; left: 0; top: 0; bottom: 90px; right: 0;  overflow: auto; -webkit-overflow-scrolling: touch;}
  .summary { height: 90px; padding: 20px 16px;}
  .summary .img { width: 90px; height: 90px; float: left;}
  .summary .main { padding-left: 112px;}
  .summary .main .title { font-size: 17px; color: #4F494B;-webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
    display: -webkit-box; height: 40px; line-height: 20px; padding-right: 20px; }
  .summary .main .price {margin-top: 28px;}
  .summary .main .price .now { color: #E74C3C; font-size: 18px; margin-right: 8px;}
  .summary .main .price .upassCol { color: #C59855;}
  .summary .main .price .old { color: #BEBDBB; font-size: 13px; text-decoration:line-through;}
  .attr-con .color-classify .items label { display: inline-block; padding: 9px 14px; border:1px solid #4F494B; border-radius: 3px; text-align: center;
    margin: 12px 12px 0 0 ; color: #4F494B; }
  .attr-con .color-classify .items label.checked { background: #E74C3C; border:1px solid #E74C3C;; color: #fff;}
  .attr-con .color-classify .items label.over { color: #BEBDBB; border:1px solid #DEDEDE;}
  .attr-con .property { padding:20px 16px;}
  .attr-con .property .t { margin: 0 0 4px 0; font-size: 13px; color: #4F494B;}
  .attr-con .content {margin-top: 12px; }
  .attr-con .number-control {float: left; margin-right: 12px;}
  .attr-con .number-control .decrease,.number-control .increase { float:left; -webkit-user-select: none;
    -ms-user-select:none; width: 24px; height: 24px; background: none; border:1px solid #4F494B; color: #4F494B; border-radius: 3px;
    text-align: center;}
  .attr-con .number-control .over { border: 1px solid #E6E6E6; color: #E6E6E6;}
  .number-control .num { float: left; width:30px; height:24px; line-height: 24px; text-align: center; padding:0 10px;  }
  .attr-con .number .tips { float: left;color: #E74C3C; line-height: 24px;}
  .icon-close{
    position: fixed;
    right:33px;
    top:40px;
    font-size: 28px;
    color: black;
  }
</style>
