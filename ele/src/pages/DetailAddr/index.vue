<template>
    <div class="addrWrap">
       <header>
           <b class="iconfont icon-xiangzuo"></b>
           <span class="curCity">{{curCity}}</span>
           <span 
           @click="handleGoback"
           class="changeCity">切换城市</span>
       </header>
       <section>
           <div class="submitAddr">
               <p class="iptBox">
                   <input 
                    v-model="iptVal"
                    type="search" 
                    placeholder="输入学校、商务楼、地址"
                    >
                    <b
                     v-if="iptVal"
                     @click="handleClearIpt"
                     class="iconfont icon-cuo"></b>
               </p>
               <button @click="handleSubmit">提交</button>
           </div>
            <div class="searchList" v-if="searchResult">
                <Searchlist :list="searchResult"></Searchlist>
           </div>
           <div v-else>暂无改地址</div>
           <div class="historySearch" v-if="isShowHistory">
               <h6 class="searchTitle">搜索历史</h6>
               <Searchlist :list="historyList"></Searchlist>
               <p 
               @click="handleClearHistory"
               class="clearAll">清空所有</p>
           </div>
           <div v-if="nodata">暂无数据</div>
       </section>
    </div>
</template>

<script>
import '@/assets/fonts/iconfont.css'
import { mapActions, mapGetters, mapMutations } from 'vuex'
import Searchlist from '@/components/searchList.vue'
export default {
    components:{
        Searchlist
    },
    data(){
        return {
            iptVal:'',
            curCityId:'',
            isShowHistory:true,
            curCity:'',
            historyList:[],
            nodata:false

        }
    },
   onLoad: async function(option){
    this.clearSearchList()
    this.curCityId = option.id
    let data = await this.changeCity(option.id)
    this.curCity = data.name
    this.isShowHistory=true
    //获取本地历史纪录
    
  },
  computed:{
      ...mapGetters(['searchResult'])
  },
  mounted(){
     let value =  wx.getStorageSync('historicalRecord')
     this.historyList = value
  },
  methods:{
    ...mapMutations({
        clearSearchList:'cityPosition/CLEARSEARCH'
    }),
    ...mapActions({
        getSearchResult:'cityPosition/getSearchResult',
        changeCity:'cityPosition/changeCity',
    }),
    //返回到选择城市页面
    handleGoback(){       
        wx.navigateBack({
            delta: 1
        })
    },
    //清空表单内容
    handleClearIpt(){
        this.iptVal = ''
    },
    //清空历史纪录
    handleClearHistory(){
       wx.removeStorageSync('historicalRecord')
       this.historyList = []
    },
    //提交表单 搜索详细地址
    async handleSubmit(){
        if(this.iptVal){
            let params= {
                "city_id":this.curCityId,
                keyword:this.iptVal
            }
           await this.getSearchResult(params)
            this.isShowHistory = false;
            this.handleClearIpt()
            if(!this.searchResult.length){
                console.log("true")
                this.nodata = true
            }else{
                console.log("false")
                this.nodata = false
                
            }

            console.log(this.searchResult.length,'seracylist')
        }
    }
  }
}
</script>
<style scoped lang="scss">
    .addrWrap{
        width: 100%;
        header{
            display: flex;
            align-items: center;
            justify-content: space-between;        
            width:100%;
            height: 44px;
            box-sizing: border-box;
            font-size: 16px;
            padding:0 10px;
            color:#fff;
            background: #3190E8;  
            >.curCity{
                font-size: 19px;
                font-weight: 800;
            }
            >.changeCity{
                font-size: 13px;
            }
            >b.iconfont{
                width:10%;
                font-size: 16px;
            }
        }
    }
    .submitAddr{
        display: flex;
        align-items: center;
        justify-content: center; 
        flex-direction: column;
        width: 100%;
        height: auto;
        box-sizing: border-box;
        padding: 10px 20px;
        background: #fff;
        border:1px solid #eee;
        >.iptBox{
            width: 100%;
            height: auto;
            position: relative;
            >input{
                height: 35px;
                box-sizing: border-box;
                padding:0 10px;
                border:1px solid #eee;
                font-size: 15px;
            }
            >b.icon-cuo{
                position: absolute;
                top:50%;
                right:10px;
                z-index:999;
                transform: translateY(-50%);
                font-size: 14px;
                background-image: -webkit-gradient(linear, right 0, left 0, from(rgb(68, 119, 187)), to(rgb(40, 70, 126)));
			   /*必需加前缀 -webkit- 才支持这个text值 */
			    -webkit-background-clip: text; 
			    /*text-fill-color会覆盖color所定义的字体颜色： */
			    -webkit-text-fill-color: transparent; 
            }   
        }
        >button{
            width: 100%;
            height: 35px;
            line-height: 35px;
            background: #3190E8;  
            color:#fff;
            font-size: 16px;
            outline: none;
            border:0;
            margin-top:10px;
            border-radius: 2px;
        }
    }
    //搜索历史
    .historySearch{
        width: 100%;
        height: auto;
        >h6.searchTitle{
            box-sizing: border-box;
            height: 20px;
            line-height: 19px;
            border-bottom:1px solid #E4E4E4;
            border-top:1px solid #E4E4E4;
            font-size:12px;
            color:#555;
            background: #f4f4f4;
            padding: 0 10px;
        }
    }
    //搜索历史列表
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
    .clearAll{
        width: 100%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        font-size: 16px;
        border-bottom: 1px solid #eee;   

    }
</style>
