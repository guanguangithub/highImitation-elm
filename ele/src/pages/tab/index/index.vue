<template>
  <div class="homeWrap">
    <div v-if="curAddress" @click="handleToCity">{{curAddress}}</div>
    <!-- <DetailAddr v-else></DetailAddr> -->
  </div>
</template>

<script>
import {mapState, mapActions, mapGetters } from 'vuex';
import Cityposition from "../../Cityposition/index.vue"
import DetailAddr from "../../DetailAddr/index.vue"
export default {
  onLoad(){
    if(!this.curAddress){
      var url = "../../Cityposition/main"
      wx.navigateTo({url})
    }
  },
  components:{
    Cityposition
  },
  computed: {
    ...mapState({
    }),
    ...mapGetters(['curAddress'])
  },
  methods: {
    handleToCity(){
      console.log(1)
        var url = "../../Cityposition/main"
      wx.navigateTo({url})
    }
  },
  mounted() {
    console.log(this.curAddress)
     let value =  wx.getStorageSync('historicalRecord')
    console.log(value,)
  },
}
</script>

<style scoped lang="scss">
  .homeWrap{
    width: 100%;
    height: 100%;
    background: #eee;
  }
</style>
