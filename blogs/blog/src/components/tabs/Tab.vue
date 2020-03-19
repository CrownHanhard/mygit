<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#000"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >
      <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">{{ item.navItem }}</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "Home",
      navList: [
        { name: "/Home", navItem: "网站首页" },
        { name: "/Blogs/1", navItem: "个人博客" },
        { name: "/About", navItem: "关于我" },
        { name: "/Times", navItem: "时间轴" },
        { name: "/Leave", navItem: "留言" }
      ]
    };
  },

  methods: {
    handleSelect(key, keyPath) {
        console.log(key)
    }
  },
    created() {
        this.activeIndex=`/${this.$route.name}`
        console.log(this.$route.name)
  },
};
</script>
<style lang="less" scoped>
.el-menu-demo{
    text-align:center
}
</style>