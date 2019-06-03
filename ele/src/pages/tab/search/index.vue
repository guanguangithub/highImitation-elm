<template>
  <div class="searchwrap">
    <!-- 搜索页头部 -->
    <div class="header">
      <p>
        <span>＜</span>
        <span>搜索</span>
      </p>
    </div>
    <!-- 搜索页身体 -->
    <div class="section">
      <div action class="formlist">
        <input type="text" placeholder="请输入商家或美食名称" v-model="msg" @input="inputfoucs">
        <span v-show="tagisshow" class="removetag">×</span>
        <button type="submit" @click="subsearch">提交</button>
      </div>
      <ul v-show="msg&&isshow">
        <h2>商家</h2>
        <li v-for="(item,index) in list" :key="index">
          <span class="left"><img :src="imgUrl" alt=""></span>
          <div class="right">
            <p>{{item.name}}</p>
            <p>月售{{item.recent_order_num}}单</p>
            <p>{{item.float_minimum_order_amount}}元起送/距离{{item.distance}}里</p>
          </div>
        </li>
      </ul>
      <ol class="historylist" v-show="!isshow">
        <h2>搜索历史</h2>
        <li v-for="(item,index) in storagelist" :key="index">
          <p>{{item}}</p>
          <span>×</span>
        </li>
        <li id="last-li" @click="removeall">清空搜索历史</li>
      </ol>
    </div>
  </div>
</template>
<script>
import { mapActions, mapMutations } from "vuex";
export default {
  props: {},
  data() {
    return {
      msg: "",
      list: [],
      isshow: false,
      storagelist: [],
      tagisshow: false
    };
  },
  computed: {},
  methods: {
    ...mapActions({
      getCateList: "search/getCateList"
    }),
    subsearch() {
      if (this.msg != "") {
        this.isshow = true;
        this.storagelist = wx.getStorageSync("searchHistory") || [];
        if (this.storagelist.indexOf(this.msg) == -1) {
          this.storagelist.push(this.msg);
          wx.setStorageSync("searchHistory", this.storagelist);
        }
      } else {
        this.isshow = false;
      }
      this.getCateList().then(res => {
        this.list = res;
      });
    },
    inputfoucs() {
      if (!this.msg) {
        this.isshow = false;
      }
    },
    removeall(){
        wx.setStorageSync("searchHistory", [])
        this.isshow = true;
    }
  },
  created() {
    this.storagelist = wx.getStorageSync("searchHistory") || [];
  }
};
</script>
<style  lang="scss">
$w: 100%;
$h: 100%;
@mixin flexwrap() {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
html,
body,
#App {
  width: $w;
  height: $h;
  box-sizing: border-box;
}
* {
  padding: 0;
  margin: 0;
}
.searchwrap {
  width: $w;
  height: $h;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .header {
    width: 100%;
    height: 45px;
    & > p {
      width: 100%;
      height: 45px;
      border: 1px solid #3190e8;
      background: #3190e8;
      color: #fff;
      display: flex;
      align-items: center;
      position: fixed;
      z-index: 100;
      top: 0;
      left: 0;
      padding:0 8px;
      box-sizing:border-box;
      font-weight: bold;
    }
    span:nth-child(1){
        font-size:20px;
    }
    span:nth-child(2) {
      width: 50%;
      text-align: right;
    }
  }
}
.section {
  flex: 1;
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  overflow-y: scroll;
  .formlist {
    width: 100%;
    height: 65px;
    @include flexwrap();
    padding: 0 8px;
    box-sizing: border-box;
    background: #fff;
     font-weight:bold;
    input {
      width: 75%;
      height: 35px;
      border: 1px solid #ccc;
      border-radius: 6px;
      background: #f2f2f2;
      font-size: 16px;
      padding-left:6px;
    }
    button {
      width: 23%;
      margin-left:3px;
      height: 35px;
      font-size: 16px;
      line-height: 35px;
      background: #3190e8;
      color: #fff;
    }
  }
  ul {
    width: 100%;
    & > h2 {
      width: 100%;
      height: 40px;
      background: #ccc;
      line-height: 40px;
      color: #555;
       padding:0 8px;
      box-sizing:border-box;
    }
    li {
      width: 100%;
      height: 100px;
      @include flexwrap();
      box-sizing: border-box;
      padding: 8px 6px;
      background: #fff;
      & > .left {
        width: 20%;
        height: 80%;
        img {
          width: 100%;
        }
      }
      & > .right {
        width: 80%;
        height: 80%;
        padding-left:8px;
        border-bottom: 1px solid #ccc;
        p {
          margin-bottom: 8px;
        }
      }
    }
  }
}
.historylist {
  width: 100%;
 &>h2 {
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #f5f5f5;
    color: #555;
    padding:0 8px;
    box-sizing: border-box;
    font-weight: bold;
  }
  
  & > li {
    width: 100%;
    height: 45px;
    background: #fff;
    color: #000;
    @include flexwrap();
    border-bottom: 1px solid #ccc;
    padding:0 8px;
    box-sizing: border-box;
    span {
      color: #9f9f9f;
      font-weight: bolder;
      font-size:26px;
    }
  }
  #last-li {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #3190e8;
    font-weight:bold;
  }
}
</style>