<template>
  <div class="banner">
    <el-carousel indicator-position="none">
      <el-carousel-item class="lunbo-box-item" v-for="(item,index) in banner_img" :key="index">
        <img style="width:100%;height:100%" :src="item.src" class="lunbotu" alt="轮播图" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      banner_img: [
      ]
    };
  },
  created() {
    this.$http
      .get("http://127.0.0.1:1116/api/getBannerData")
      .then(res => {
        res.data.forEach((item) => {
          this.banner_img.push({
            src:require(`../../../../admin/src/api/banner/bannerimage/${item.src.substring(item.src.lastIndexOf("\\") + 1)}`)
          });
        });
      })
      .catch(err => {
        throw err;
      });
  },
};
</script>
<style lang="less" scoped>
.banner{
    height:100%;
    overflow: hidden
}
</style>