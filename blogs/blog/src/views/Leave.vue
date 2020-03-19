<template>
  <div>
    <editor-bar v-model="detail" :isClear="isClear" @change="change"></editor-bar>
    <el-button type="primary" :loading="subloading" @click="subData">{{subtext}}</el-button>
  </div>
</template>
<script>
import EditorBar from "../components/editor/editor";
export default {
  components: { EditorBar },
  data() {
    return {
      isClear: false,
      detail: "",
      subtext: "发布",
      subloading: false,
      editorData: ""
    };
  },
  methods: {
    change(val) {
      this.editorData = val;
    },
    subData() {
      this.subtext = "发布中";
      this.subloading = true;
      setTimeout(() => {
        this.subtext = "发布";
        this.subloading = false;
        this.detail = "";
         this.$message({
            showClose: true,
            message: "发表成功",
            type: "success"
          });
      }, 2000);
    }
  }
};
</script>