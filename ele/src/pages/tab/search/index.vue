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
        <span v-show="tagisshow" class="removetag" @click='removeinput'>×</span>
        <button type="submit" @click="subsearch">提交</button>
      </div>
      <ul v-if="isshow">
        <h2>商家</h2>
        <li v-for="(item,index) in list" :key="index">
          <span class="left">
            <img :src="item.image_path" alt>
          </span>
          <div class="right">
            <p>{{item.name}}</p>
            <p>月售{{item.recent_order_num}}单</p>
            <p>{{item.float_minimum_order_amount}}元起送/距离{{item.distance}}里</p>
          </div>
        </li>
      </ul>
      <ul v-show="!ishistory">
        <p>很抱歉无搜索结果</p>
      </ul>
      <ol class="historylist" v-show="ishistory">
        <h2>搜索历史</h2>
        <li v-for="(item,index) in storagelist" :key="index">
          <p>{{item}}</p>
          <span @click="removeli(index)">×</span>
        </li>
        <li id="last-li" @click="removeall">清空搜索历史</li>
      </ol>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  props: {},
  data() {
    return {
      msg: "",
      list: [],
      isshow: false,
      storagelist: [],
      tagisshow: false,
      ishas: false,
      ishistory: false,
      tagisshow: false
    };
  },
  methods: {
    // 通过传入搜索的字 来获取筛选后的商家列表
    ...mapActions({
      getCateList: "search/getCateList"
    }),
    subsearch() {
      if (this.msg != "") {
        this.ishistory = false;
        this.storagelist = wx.getStorageSync("searchHistory") || [];
        if (this.storagelist.indexOf(this.msg) == -1) {
          this.storagelist.push(this.msg);
          wx.setStorageSync("searchHistory", this.storagelist);
        }
        if (this.list.length) {
          this.isshow = true;
        } else {
          this.ishas = true;
        }
      } 
      this.getCateList({
        str: this.msg
      }).then(res => {
        if (res.status == 0) {
          this.ishas = true;
        } else {
          this.ishas = false;
          this.list = res;
          this.list.forEach((item, ind) => {
            item.image_path = `//elm.cangdu.org/img/${item.image_path}`;
          });
        }
      });
    },

    inputfoucs() {
      if (!this.msg) {
        this.ishas = false;
        this.isshow = false;
        this.ishistory = true;  
      }else{
        this.tagisshow = true;
      } 
      
    },
    removeinput(){
      this.msg = "";
      this.ishistory = true;
    },
    removeall() {
      wx.setStorageSync("searchHistory", []);
      this.ishistory = false;
    },
    async removeli(index) {
      await this.storagelist.splice(index, 1);
      wx.setStorageSync("searchHistory", this.storagelist);
    }
  },
  created() {
    this.storagelist = wx.getStorageSync("searchHistory") || [];
    if(this.storagelist){
      this.ishistory = true;
    }
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
      padding: 0 8px;
      box-sizing: border-box;
      font-weight: bold;
    }
    span:nth-child(1) {
      font-size: 20px;
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
    position:relative;
    width: 100%;
    height: 65px;
    @include flexwrap();
    padding: 0 8px;
    box-sizing: border-box;
    background: #fff;
    font-weight: bold;
    .removetag {
      position: absolute;
      left:70%;
      top:30%;
      font-size:20px;
      z-index:100;
      color:#5c9cd8
    }
    input {
      width: 75%;
      height: 37px;
      border: 1px solid #ccc;
      border-radius: 4px;
      background: #f2f2f2;
      font-size: 16px;
      padding-left: 6px;
    }
    button {
      width: 22%;
      margin-left: 5px;
      height: 37px;
      font-size: 16px;
      line-height: 37px;
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
      padding: 0 8px;
      box-sizing: border-box;
    }
    li {
      width: 100%;
      height: 100px;
      @include flexwrap();
      box-sizing: border-box;
      padding: 8px 6px;
      background: #fff;
      border-bottom: 1px solid #e4e4e4;
      & > .left {
        width: 20%;
        height: 80%;
        padding: 6px;
        img {
          width: 80%;
          height: 50px;
        }
      }
      & > .right {
        width: 80%;
        height: 80%;
        padding-left: 8px;
        border-bottom: 1px solid #e4e4e4;

        p {
          margin-bottom: 4px;
          font-size: 12px;
        }
      }
    }
  }
}

.historylist {
  width: 100%;
  & > h2 {
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #f5f5f5;
    color: #555;
    padding: 0 8px;
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
    padding: 0 8px;
    box-sizing: border-box;
    span {
      color: #9f9f9f;
      font-weight: bolder;
      font-size: 26px;
    }
  }
  #last-li {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #3190e8;
    font-weight: bold;
  }
}
</style>