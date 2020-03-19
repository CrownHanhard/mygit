<template>
  <div id="app">
    <el-container>
      <el-header class="custom_nav">
        <el-row id="custom_container">
          <el-col class="custom_title" :span="6">桂马个人博客</el-col>
          <el-col :span="18">
            <Tab></Tab>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>
<script>
import Tab from "./components/tabs/Tab.vue";
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    Tab: Tab
  }
};
</script>
<style lang="less">
body {
  margin: 0;
  padding: 0;
  background: #e9eaed;
  counter-reset: subsection 0;
}
#app {
  width: 100%;
  padding: 0;
  .custom_nav {
    padding: 0;
  }
  #custom_container {
    background: #000;
    .custom_title {
      color: #fff;
      line-height: 60px;
      text-indent: 40px;
      border-bottom: 1px solid #fff;
      cursor: pointer;
      &:hover {
        color: orange;
      }
    }
  }
}
</style>
