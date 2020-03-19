<template>
  <div id="app">
    <el-container>
      <el-header></el-header>
      <el-container>
        <el-aside width="260px">
          <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
            <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">隐藏</el-radio-button>
          </el-radio-group>
          <el-menu
            :default-active="tab"
            class="el-menu-vertical-demo"
            :collapse="isCollapse"
            router
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-setting"></i>
                <span slot="title">网站首页</span>
              </template>
              <el-menu-item-group>
                <span slot="title">首页banner</span>
                <el-menu-item index="Bannerlist">banner列表</el-menu-item>
                <el-menu-item index="Bannerupload">banner上传</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="推荐列表图片">
                <el-menu-item index="1-3">图片列表</el-menu-item>
                <el-menu-item index="1-4">图片上传</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-setting"></i>
                <span slot="title">个人博客</span>
              </template>
              <el-menu-item-group>
                <span slot="title">博客详情</span>
                <el-menu-item index="blogList">博客列表</el-menu-item>
                <el-menu-item index="uploadBlog">文章上传</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-setting"></i>
                <span slot="title">网友评论</span>
              </template>
              <el-menu-item-group>
                <span slot="title">屏幕列表</span>
                <el-menu-item index="3-1">评论优选</el-menu-item>
                <el-menu-item index="3-2">评论管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-container>
          <el-main>
            <router-view></router-view>
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isCollapse: true,
      tab: "Bannerlist"
    };
  },
  created() {
    // console.log(this.$route.name)
    if (this.$route.name) {
      this.isCollapse = false;
      this.tab = this.$route.name;
    }
  },
  methods: {},
  components: {}
};
</script>
<style lang="less">
.el-header {
  width: 100%;
  background: #606266;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>