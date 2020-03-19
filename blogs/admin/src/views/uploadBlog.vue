<template>
  <div>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="文章题目" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="文章类型" prop="type">
        <el-select v-model="ruleForm.type" placeholder="请选择文章所属类型">
          <el-option label="css3|html5" value="style"></el-option>
          <el-option label="网站建设" value="jianshe"></el-option>
          <el-option label="设计心得" value="xinde"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="是否推荐" prop="recommend">
        <el-radio-group v-model="ruleForm.recommend">
          <el-radio label="确定"></el-radio>
          <el-radio label="取消"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="文章内容" prop="detail">
        <editor-bar v-model="ruleForm.detail" @change="change"></editor-bar>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即发表</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import EditorBar from "../components/editor/editor";
export default {
  components: { EditorBar },
  data() {
    return {
      ruleForm: {
        name: "",
        type: "",
        delivery: false,
        recommend: true,
        detail: ""
      },
      rules: {
        name: [{ required: true, message: "请输入文章标题", trigger: "blur" }],
        type: [
          { required: true, message: "请选择文章所属", trigger: "change" }
        ],
        recommend: [
          { required: true, message: "请选择是否推荐", trigger: "change" }
        ],
        detail: [{ required: true, message: "请填写文章内容", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let self = this;
          let obj = {
            name: self.ruleForm.name,
            type: self.ruleForm.type,
            recommend: self.ruleForm.recommend == "确定" ? true : false,
            detail: self.ruleForm.detail,
            date: new Date().valueOf()
          };
          this.$http({
            method: "post",
            url: "http://127.0.0.1:1116/api/setBlogData",
            data: obj
          })
            .then(function(response) {
                console.log(response.data.code)
              if (response.data.code== 200) {
                self.$message({
                  showClose: true,
                  message: "发布成功",
                  type: "success"
                });
                setTimeout(() => {
                  self.ruleForm.name='';
                  self.ruleForm.type='';
                  self.ruleForm.recommend='';
                  self.ruleForm.detail='';
                });
              }
            })
            .catch(function(error) {
              console.log(error);
            });
        } else {
          this.$message({
            showClose: true,
            message: "请确保信息填写完整",
            type: "error"
          });
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    change(val) {
      this.editorData = val;
    }
  }
};
</script>