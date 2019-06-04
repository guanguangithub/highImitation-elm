<template>
  <div class="orders">
    <div class="paddingTop search_page">
      <header id="head_top">
        <span><img src="/static/images/next-copy.png" alt=""></span>
        <span>搜索</span>
        <span></span>
      </header>
       <div class="search_form">
        <input type="search" name="search" placeholder='请输入商家或美食名称' class="search-input">
       <button class="search_submit">提交</button>
      </div>
      <div class='content'>

      </div>
    </div>
   
  </div>
</template>

<script>
export default {
  data:{},

}
</script>

<style lang="scss" scoped>
.orders{
  height: 100%;
  width: 100%;
  background-color: #f5f5f5;
  padding: 0;
  margin: 0;
  list-style: none;
  font-style: normal;
  text-decoration: none;
  border: none;
  color: #333;
  font-weight: 400;
  font-family: Microsoft Yahei;
  box-sizing: border-box; 
  header{
    width: 100%;
    background-color: #3190e8;
    width: 100%;
    height: 87rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
   
    span:nth-child(1){
      left: 20rpx;
      width: 40rpx;
      height: 50rpx;
      line-height: 50rpx;
      margin-left: 20rpx; 
      img{
        width: 100%;
        height: 100%;
      }
    }
    span:nth-child(2){
      color: #fff;
    }
  }
  .search_form{
    width: 100%;
    background-color: #fff;
    display: flex;
    padding: 20rpx;
    .search-input{
      flex:1;
      border: 1px solid #e4e4e4;
      font-size: 30rpx;
      color: #333;
      border-radius: 6rpx;
      background-color: #f2f2f2;
      font-weight: 700;
      padding: 0 10rpx;
      height: 75rpx;
    }
    .search_submit{
      width: 25%;
      height: 75rpx;
      border: 1rpx solid #3190e8;
      margin-left:8rpx;
      font-size:26rpx;
      color: #fff;
      border-radius: 10rpx;
      background-color: #3190e8;
      font-weight: 700;
      text-align: center;
    }
  }
}
</style>
