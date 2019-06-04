<template>
    <swiper class="swiper" :indicator-dots="indicatorDots">
        <block v-for="(item, index) in datalist" :key="index">
            <swiper-item>
                <ul class="swiper_ul">
                  <li v-for="(key,ind) in item.list" :key="ind" @click="toSortComponent(key)">
                    <span><img :src="key.image_url"/></span>
                    <span>{{key.title}}</span>
                  </li>
                </ul>
            </swiper-item>
        </block>
    </swiper>
</template>

<script>
export default {
  props: {
    datalist:{
      type: Array
    }
  },
  data() {
    return {
      indicatorDots: true,
    };
  },
  created(){

  },
  methods: {
      toSortComponent(key){
        wx.navigateTo({
          url:'/pages/sort/main'
        })
      }
  }
};
</script>
<style lang="scss" scoped>
  *{
    font-size: 14px;
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    font-family:"微软雅黑";
    box-sizing: border-box;
  }
  .swiper {
    width:100%;
    height:100%;
  }
  .swiper_ul{
    width:100%;
    height:auto;
    display: flex;
    flex-wrap: wrap;
    li{
      width:25%;
      height:92px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      padding:7px 0;
      span:nth-child(1){
        width:100%;
        height:70%;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
          width:42.19px;
          height:42.19px;
        }
      }
      span:nth-child(2){
        width:100%;
        height:30%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size:12px;
        color: #666;
      }
    }
  }
</style>
