<template>
    <div class="cityWrap">
       <header>
           <span>ele.me</span>
           <p class="login">
               <b>登录</b>|<b>注册</b>
           </p>
       </header>
       <section>
           <ul class="curCity">
               <li>
                   <span>当前定位城市</span>
                   <span class="citytips">定位不准时，请在城市列表中选择</span>
               </li>
               <li @click="()=>goDetailAddress(curCityInfo.id)">
                   <span class="curpositon">{{curCityInfo.name}}</span>
                   <i class="iconfont icon-xiangyou"></i>
               </li>
           </ul>
           <ul class="hotCity">
              <li v-for="(item,key) in hotCity" :key='key'
              @click="()=>goDetailAddress(item.id)"
              >
                  {{item.name}}
              </li>
           </ul>
           <div class="cityList">
               <div 
                class="cityItem"
                v-for="(val,key) in allCity"
                :key="key"
                >
                   <h6>{{val.title}}</h6>
                   <ul class="itemList">
                       <li v-for="(item,i) in val[val.title]"
                        :key="i"
                        @click="()=>goDetailAddress(item.id)"
                       > 
                           {{item.name}}
                       </li>
                   </ul>
               </div>
            
           </div>
       </section>
    </div>
</template>

<script>
import '@/assets/fonts/iconfont.css'
import { mapGetters, mapActions } from 'vuex'
export default {
    onLoad(){
        console.log(getCurrentPages(),'hsdbfghjk' )
    },
    computed:{
        ...mapGetters(['curCityInfo', 'hotCity', 'allCity'])
    },
    mounted(){
        this.getCurCity()
        this.getHotCity()
        this.getAllCity()
    },
    methods:{
        ...mapActions({
            getCurCity:"cityPosition/getCurCity",
            getHotCity:"cityPosition/getHotCity",
            getAllCity:"cityPosition/getAllCity",
        }),
        goDetailAddress(id){
            var url = "../DetailAddr/main?id="+id
            wx.navigateTo({url})
        }
    }
}
</script>
<style scoped lang="scss">
    .cityWrap{
        width: 100%;
        height: 100%;
        header{
            display: flex;
            align-items: center;
            justify-content: space-between;        
            width:100%;
            height: 44px;
            font-size: 16px;
            padding:0 10px;
            color:#fff;
            background: #3190E8;  
        }
    }
    .login{
        padding: 0 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        b{
            margin:0 5px;
        }
    }
    .curCity{
        width: 100%;
        height: auto;
        font-size: 14px;        
        >li{
            width: 100%;
            height: 44px;
            background: #fff;
            box-sizing: border-box;
            padding:0 10px;
            border-bottom: 1px solid #eee;
            display: flex;
            align-items: center;
            justify-content: space-between;
            color:#555;
            .citytips{
                color:#888;
            }
            .curpositon{
                font-size: 18px;
                color:#3190E8;
            }
        }
         >li:last-child{
             border-bottom: 2px solid #E4E4E4;
         }
    }
    .hotCity{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
        width: 100%;
        height: auto;
        border-top: 2px solid #E4E4E4;
        border-bottom: 2px solid #E4E4E4;
        background: #fff;
        margin:10px 0;
        >li{
            width:25%;
            height: 44px;
            line-height: 44px;
            font-size: 14px;
            color:#3190E8;
            text-align: center;
            box-sizing: border-box;
            border-bottom: 1px solid #E4E4E4;
            border-right: 1px solid #E4E4E4;
        }
    }
    .cityList{
        width: 100%;
        height: auto;
        margin-top: 10px;
        .cityItem{
            width: 100%;
            >h6{
                height: 40px;
                line-height: 40px;
                font-size: 14px;
                color:#888;
                box-sizing: border-box;
                padding:0 10px;
                background: #fff;
                margin-top:10px;
                border-top:2px solid #E4E4E4;
            }
        }
    }
    .itemList{
        width: 100%;
        height: auto;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
        border-bottom: 2px solid #eee;
        border-top: 1px solid #E4E4E4;
        background: #fff;
        >li{
            width:25%;
            height: 44px;
            line-height: 44px;
            font-size: 14px;
            color:#666;
            text-align: center;
            box-sizing: border-box;
            border-bottom: 1px solid #E4E4E4;
            border-right: 1px solid #E4E4E4;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
    }
</style>
