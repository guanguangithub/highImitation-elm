<template>
    <div>
        详情
    </div>
</template>
<script>
export default {
    data:{},
      methods: {
    ...mapActions({
      getDetail: 'index/getDetail'
    })
  },
   mounted() {
    // console.log('this.list...', this.list);
    this.getDetail();
    console.log( this.getDetail())
  },
}
</script>
<style lang="scss" scoped>

</style>

