<template>
  <div>
    <el-row>
      <el-collapse class="resume" v-model="activeNames" @change="handleChange">
        <el-collapse-item title="个人信息" name="1">
          <div>姓名：王冠涵</div>
          <div>邮箱：15592191450@163.com</div>
        </el-collapse-item>
        <el-collapse-item title="专业技能" name="2">
          <div>Web开发：使用Node开发移动端音乐播放器后台API接口</div>

          <div>Web框架：掌握Express、Mongoose</div>

          <div>前端框架：掌握Vue、VueRouter、Vuex。</div>

          <div>前端工具：掌握less开发</div>

          <div>数据库相关：掌握MongoDB</div>

          <div>版本管理、文档和自动化部署工具：掌握Git部署过程。</div>
        </el-collapse-item>
        <el-collapse-item title="项目相关" name="3">
          <div>项目名称：vue音乐播放器（www.wgh0819.top）</div>
          <div>前端采取Vue承载页面基本内容、Axios进行页面数据交互、Vuex进行页面全局数据存储的形式进行开发。</div>
          <div>后端采用Node Express Mongoose进行API设计。</div>
          <div>歌曲以及歌手信息来源均采源于QQ音乐线上版本的数据处理。</div>
          <div>项目中通过对QQ音乐数据的爬取以及分析重构了部分播放功能。如音乐搜索、明星搜索、歌词显示。</div>
          <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
        </el-collapse-item>
      </el-collapse>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "About.vue",
  data() {
    return {
      activeNames: ["1"]
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    }
  }
};
</script>
<style lang="less" scoped>
.resume {
  padding: 10px;
  text-align: center;
}
</style>