<template>
  <div class="IndexContainer">
    <div class="IndexHeader">
      <span><icon type="search" size="20" color="#fff"/></span>
      <span>长宁区北新泾明基商务广场(北翟路南)</span>
      <span>登陆|注册</span>
    </div>
    <div class="IndexNav">
      <Swiper :datalist="datalist" />
    </div>
    <div class="IndexContent">
      <div class="IndexContent_header">
        <span><icon type="success" size="14" color="#ccc"/></span>
        <span>附近商家</span>
      </div>
      <div class="IndexContent_cont">
        <ul class="IndexContent_cont_ula">
          <li v-for="(item,index) in Merchant" :key="index">
            <p class="Pimg"><img :src="item.image_path"/></p>
            <div class="ula_cont">
              <header class="ula_cont_head">
                <p>{{item.name}}</p>
                <p>
                  <span>保</span>
                  <span>准</span>
                  <span>票</span>
                </p>
              </header>
              <section class="ula_cont_section">
                <div class="ula_cont_section_divs">
                  <p>
                    <span>&#9733;</span>
                    <span>&#9733;</span>
                    <span>&#9733;</span>
                    <span>&#9733;</span>
                    <span>&#9733;</span>
                  </p>
                  <p>{{item.rating}}分</p>
                  <p>月售{{item.recent_order_num}}单</p>
                </div>
                <div class="ula_cont_section_right">
                  <span>{{item.delivery_mode.text}}</span>
                  <span>准时宝</span>
                </div>
              </section>
              <footer class="ula_cont_footer">
                <p>
                  <span>¥{{item.float_minimum_order_amount}}起送/</span>
                  <span>{{item.piecewise_agent_fee.tips}}</span>
                </p>
                <p>
                  <span>{{item.distance}}/</span>
                  <span>{{item.order_lead_time}}</span>
                </p>
              </footer>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';
import Swiper from "@/components/swiper";
export default {
  components: {
    Swiper
  },
  data() {
    return {
      datalist:[],
      Merchant:[]
    }
  },
  methods: {
    ...mapActions({
      getCateList: 'index/getCateList',
      getIndList:'index/getIndList'
    })
  },
  mounted() {
    this.getCateList().then((res)=>{
      if(res.status === 200){
        let objOne = {};
        let objTwo = {};
        objOne.id = 1;
        objOne.list = res.data.slice(0,8);
        objTwo.id = 2;
        objTwo.list = res.data.slice(8,res.data.length)
        let dataArr = [objOne,objTwo]
        dataArr.forEach((item,ind)=>{
          item.list.forEach((key,ind)=>{
            key.image_url = 'https://fuss10.elemecdn.com'+key.image_url
          })
        })
        this.datalist = dataArr
      }
    })
    this.getIndList().then((res)=>{
      if(res.status === 200){
        res.data.forEach((item,ind)=>{
          item.image_path = 'https://elm.cangdu.org/img/' + item.image_path
        })
        this.Merchant = res.data
        console.log(this.Merchant)
      }
    })
  },
}
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
  a {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0)
  }
  .IndexContainer{
    width:100%;
    height:100%;
    display: flex;
    overflow: hidden;
    flex-direction: column;
    background-color: #f5f5f5;
  }
  .IndexHeader{
      background-color: #3190e8;
      position: fixed;
      z-index: 100;
      left: 0;
      top: 0;
      width: 100%;
      height: 45px;
      display: flex;
      align-items: center;
      span:nth-child(1){
        width:15%;
        height:100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      span:nth-child(2){
        flex: 1;
        height:100%;
        padding:0 14px;
        color: #fff;
        font-size:18px;
        text-align:center;
        line-height:45px;
        text-overflow:ellipsis;
        overflow:hidden;
        white-space:nowrap;
      }
      span:nth-child(3){
        width:20%;
        height:100%;
        font-size:15px;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
      }
  }
  .IndexNav{
    margin:45px 0 0 0;
    width:100%;
    height:218px;
    background-color: #fff;
    border-bottom: 1px solid #eee;
  }
  .IndexContent{
    border-top: 1px solid #eee;
    margin-top:18px;
    width:100%;
    background-color: #fff;
    .IndexContent_header{
      width:100%;
      height: 38px;
      display: flex;
      align-items: center;
      span:nth-child(1){
        margin:0 5px 0 15px;
      }
      span:nth-child(2){
        color: #999;
        font-size:12px;
      }
    }
    .IndexContent_cont{
      width:100%;
      height: auto;
      .IndexContent_cont_ula{
        width:100%;
        height:auto;
        li{
          width:100%;
          height:105px;
          padding:16px 9px;
          border-bottom: 1px solid #f1f1f1;
          box-sizing: border-box;
          display: flex;
          .Pimg{
            width:22%;
            height:100%;
            display: flex;
            align-items: center;
            justify-content: center;
            img{
              width:63px;
              height:63px;
            }
          }
          .ula_cont{
            width:78%;
            height:100%;
            .ula_cont_head{
              width:100%;
              height:18px;
              display: flex;
              p:nth-child(1){
                width:70%;
                height:100%;
                display: flex;
                align-items: center;
                font-size:14px;
              }
              p:nth-child(1):before {
                content: "\54C1\724C";
                display: inline-block;
                font-size: 14px;
                color: #333;
                background-color: #ffd930;
                padding: 0 2px;
                border-radius: 2px;
                margin:0 5px 0 0;
              }
              p:nth-child(2){
                width:30%;
                height:100%;
                display: flex;
                align-items: center;
                justify-content:flex-end;
                span{
                  font-size:12px;
                  color: #999;
                  border: 1px solid #f1f1f1;
                  padding:0 0 0 1px;
                  border-radius: 1px;
                  margin:0 0 0 1px;
                }
              }
            }
            .ula_cont_section{
              width:100%;
              height:15px;
              margin:12px 0 0 0;
              display: flex;
              .ula_cont_section_divs{
                width:48%;
                height:100%;
                display: flex;
                p:nth-child(1){
                  width:40%;
                  height:100%;
                  display: flex;
                  line-height:15px;
                  span{
                    font-size:12px;
                    color: #ff6000;
                  }
                }
                p:nth-child(2){
                  width:20%;
                  height:100%;
                  line-height:15px;
                  font-size:10px;
                  color: #ff6000;
                }
                p:nth-child(3){
                  width:40%;
                  height:100%;
                  font-size:10px;
                  line-height:15px;
                  color: #666;
                }
              }
              .ula_cont_section_right{
                width:52%;
                height:100%;
                display: flex;
                align-items: center;
                justify-content:flex-end;
                span:nth-child(1){
                  width:40px;
                  height:10px;
                  color: #fff;
                  background-color: #3190e8;
                  border: .025rem solid #3190e8;
                  margin:0 0 0 1.8px;
                  padding:1px 1.8px 0;
                  font-size:10px;
                  border-radius:4px;
                  line-height:10px;
                }
                 span:nth-child(2){
                  width:40px;
                  height:10px;
                  color: #3190e8;
                  border: .025rem solid #3190e8;
                  line-height:10px;
                  text-align: center;
                  margin:0 0 0 1.8px;
                  padding:1px 1.8px 0;
                  font-size:10px;
                  border-radius:4px;
                }
              }
            }
            .ula_cont_footer{
              margin:13px 0 0 0;
              width:100%;
              height:15px;
              display: flex;
              align-items: center;
              p{
                width:50%;
                height:100%;
                display: flex;
                align-items: center;
                span{
                   font-size:12px;

                }
                &:nth-child(1){
                  span{
                    color: #999;
                  }
                }
                &:nth-child(2){
                  justify-content: flex-end;
                  span:nth-child(1){
                    color: #999;
                  }
                  span:nth-child(2){
                    color: #3190e8;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>

