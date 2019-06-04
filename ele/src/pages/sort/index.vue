<template>
  <div class="sort_container">
    <div class="sort_container_header">
      <p>美食</p>
    </div>
    <div class="sort_container_nav">
      <div class="container_Sort_btn" id="SortContainerBtn" :class="inds===ind?'currents':''" v-for="(item,ind) in list" :key="ind" @click="showSelect(ind)">
        <span>{{item.title}}<b></b></span>
      </div>
    </div>
    <div class="sort_container_contents">
      <ul class="sort_container_ula">
        <li v-for="(item,index) in sortData" :key="index">
            <p class="Pimg"><img :src="item.image_path"/></p>
            <div class="ulb_cont">
              <header class="ulb_cont_head">
                <p>{{item.name}}</p>
                <p>
                  <span>保</span>
                  <span>准</span>
                  <span>票</span>
                </p>
              </header>
              <section class="ulb_cont_section">
                <div class="ulb_cont_section_divs">
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
                <div class="ulb_cont_section_right">
                  <span>{{item.delivery_mode.text}}</span>
                  <span>准时宝</span>
                </div>
              </section>
              <footer class="ulb_cont_footer">
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
</template>
<script>
import {mapState, mapActions} from 'vuex';
export default {
  data() {
    return {
      list:[
        {
          id:1,
          title:'美食'
        },
        {
          id:2,
          title:'排序'
        },
        {
          id:3,
          title:'筛选'
        }
      ],
      inds:null,
      sortData:[]
    }
  },
  methods: {
    ...mapActions({
      getSort:'sort/getSort'
    }),
    showSelect(ind){
      this.inds = ind;
    }
  },
  mounted(){
    this.getSort().then((res)=>{
      if(res.status === 200){
        res.data.forEach((item,ind)=>{
          item.image_path = 'https://elm.cangdu.org/img/' + item.image_path
        })
        this.sortData = res.data
      }
    })
  }
}
</script>
<style lang="scss" scoped>
  .sort_container{
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  .sort_container_header{
    width:100%;
    height:45px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #3190e8;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    p{
      font-size:18px;
      color: #fff;
    }
  }
  .sort_container_nav{
    width:100%;
    height: 38px;
    border-bottom: 1px solid #eee;
    display: flex;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 45px;
    align-items: center;
    background-color: #fff;
    .container_Sort_btn{
      width:33.3%;
      height:24px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      &:nth-child(1),&:nth-child(2){
        border-right:1px solid rgb(226, 226, 226);
      }
      span{
        font-size:12px;
        color: #333;
        display: flex;
        align-items: center;
        b{
          margin:0 0 0 10px;
          width:0;
          height:0;
          border-left:5px solid transparent;
          border-right:5px solid transparent;
          border-top:5px solid #333;
        }
      }
    }
    .currents{
       span{
        font-size:12px;
        color: #3190e8;
        display: flex;
        align-items: center;
        b{
          margin:0 0 0 10px;
          width:0;
          height:0;
          border-left:5px solid transparent;
          border-right:5px solid transparent;
          border-bottom:5px solid #3190e8;
        }
      }
    }
  }
  .sort_container_contents{
    width:100%;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    margin:83px 0 0 0;
    .sort_container_ula{
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
          .ulb_cont{
            width:78%;
            height:100%;
            .ulb_cont_head{
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
            .ulb_cont_section{
              width:100%;
              height:15px;
              margin:12px 0 0 0;
              display: flex;
              .ulb_cont_section_divs{
                width:56%;
                height:100%;
                display: flex;
                p:nth-child(1){
                  width:38%;
                  height:100%;
                  display: flex;
                  line-height:15px;
                  span{
                    margin:-2px 0 0 0;
                    font-size:12px;
                    color: #ff6000;
                  }
                }
                p:nth-child(2){
                  width:22%;
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
              .ulb_cont_section_right{
                width:44%;
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
            .ulb_cont_footer{
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
</style>
