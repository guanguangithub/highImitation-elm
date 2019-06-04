<template>
   <ul class="searchList">
        <li 
          v-for="(val,key) in list"
          @click ="()=>handleGoHome(val)"
          :key="key">
            <p>{{val.name}}</p>
            <span>{{val.address}}</span>
        </li>
     </ul>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
    props:{
        list:{
            type:Array,
            require:true
        }
    },
    data(){
      return {
          historyList:[]
      }  
    },
    onLoad(){
         let value =  wx.getStorageSync('historicalRecord')
         console.log(value,'vale')
         this.historyList = value?value:this.historyList
    },
    methods:{
        ...mapMutations({
            curAddress:'cityPosition/CURADRESS',
        }),
        handleGoHome(addr){
            this.curAddress(addr)
            wx.setStorageSync('curAddress',addr.address)
           if(this.historyList){
               let isExit = this.historyList.some(item=>{
                   return item.name==addr.name
               })
               console.log(isExit,'isExit')
               if(!isExit){
                   this.historyList.push({
                       ...addr
                   })
               }
           }else{
               this.historyList= [
                   {
                       ...addr
                   }
               ]
           }
            wx.setStorageSync('historicalRecord',this.historyList)
            
            wx.switchTab({
                url: '/pages/tab/index/main'
            })
        },
    }
    
}
</script>
<style scoped lang='scss'>
  .searchList{
        width: 100%;
        height:auto;
        >li{
            display: flex;
            flex-direction: column;
            width: 100%;
            box-sizing: border-box;
            padding: 10px 20px;    
            border-bottom: 1px solid #eee;   
            >p{
                width: 100%;
                font-size: 14px;
                color:#333;
                box-sizing: border-box;
                padding: 10px 0;
            }
            >span{
                width: 100%;
                font-size: 12px;
                color:#aaa;
            }
        }
    }
</style>

