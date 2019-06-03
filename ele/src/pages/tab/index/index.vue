<template>
  <div class='wrapper'>
    <header class="index-JMUSj_0">
      <div class="index-1DPx9_0">
        <div class="index-2S5Ah_0">
          <span></span>
          <span class="index-2uW_v_0">北京八维研修学院</span>
        </div>
      </div>
    </header>
    <div class="search">
      <a class='content'>
        <span>搜索饿了么商家、商品名称</span>
      </a>
    </div>
    
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';

export default {
  computed: {
    ...mapState({
      list: state=>state.index.list
    })
  },
  methods: {
    ...mapActions({
      getCateList: 'index/getCateList'
    })
  },
  mounted() {
    console.log('this.list...', this.list);
    this.getCateList();
  },
}
</script>

<style scoped>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.wrapper{
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
.index-JMUSj_0{
  padding: 0 37rpx;
  background-image: linear-gradient(90deg,#0af,#0085ff);
  color: #fff;
  display: flex;
  align-items: center;
}
.index-1DPx9_0{
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 46px;
}
.index-2S5Ah_0{
  width: 60%;
  font-weight: 700;
}
.index-2uW_v_0{
  margin: 0 26rpx;
  font-size: 35rpx;
  max-width: 80%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 700;   
}
.search{
  background-image: -webkit-linear-gradient(left,#0af,#0085ff);
  position: sticky;
  z-index: 999;
  top: 0;
  padding: 20rpx 37rpx;
  margin: 0;
}
.search::before{
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  left: 0;
  background-image: linear-gradient(90deg,#0af,#0085ff)
}
.content{
  display: flex;
  width: 100%;
  height: 80rpx;
  justify-content: center;
  align-items: center;
  border-radius:10rpx;
  background: #fff;
  color: #999;
  font-size: 30rpx;
}
.search::after{
  background-image: linear-gradient(90deg,#0af,#0085ff);
}
</style>
