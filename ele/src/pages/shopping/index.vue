<template>
  <div class="Shopping_container">
    <div class="Shopping_container_header">
      <p v-for="(item,ind) in titles" :key="ind">
        <span :class="indes===ind?'currentp':''" @click="tabContainer(ind)">{{item.name}}</span>
      </p>
    </div>
    <div class="Shopping_container_content">
      <div class="Shopping_container_content_left">

      </div>
      <div class="Shopping_container_content_right">

      </div>
    </div>
    <div class="Shopping_container_footer">

    </div>
  </div>
</template>
<script>
import {mapActions} from 'vuex';
export default {
  data() {
    return {
      ids:0,
      ShoppingArr:[],
      titles:[
        {
          id:1,
          name:'商品'
        },
        {
          id:2,
          name:'评价'
        }
      ],
      indes:0
    }
  },
  onLoad: function (options) {
    this.ids = options
    console.log('43',options)
  },
  methods:{
    ...mapActions({
      getShoppingCar:'ShoppingCar/getShoppingCar'
    }),
    tabContainer(ind){
      this.indes = ind
    }
  },
  mounted(){
    this.getShoppingCar(this.ids).then((res)=>{
      if(res.status === 200){
        console.log(res.data)
        let obj = {}
        res.data.forEach((item,ind)=>{
          console.log(item)
          obj.name = item.name
        })
        console.log(obj)
      }
    })
  }
}
</script>
<style lang="scss" scoped>
  .Shopping_container{
    width:100%;
    height:100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  .Shopping_container_header{
    width:100%;
    height:47px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    padding:5px 0 0 5px;
    border-bottom: 1px solid #ccc;
    display: flex;
    align-items: center;
    p{
      width:50%;
      height:100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .currentp{
        border-bottom: 2px solid #3190e8;
      }
      span{
        font-size:16px;
        color: #333;
      }
    }
  }
  .Shopping_container_content{
    margin-top: 53px;
    width:100%;
    display: flex;
    overflow: hidden;
    .Shopping_container_content_left{
      width:25%;
      height:100px;
      border: 1px solid #000;
      box-sizing: border-box;
    }
    .Shopping_container_content_right{
      width:75%;
      height:100px;
      border: 1px solid #000;
      box-sizing: border-box;
    }
  }
  .Shopping_container_footer{
    width:100%;
    height:46px;
    background-color: #535356;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index:100;
  }
</style>

