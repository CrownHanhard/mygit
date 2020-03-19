<template>
  <div>
    <el-upload
      action="http://127.0.0.1:1116/api/setBannerData"
      list-type="picture-card"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
      :file-list="imgList"
    >
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt />
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      imgList: []
    };
  },
  created() {
    this.$http
      .get("http://127.0.0.1:1116/api/getBannerData")
      .then(res => {
        let pictureList = [];
        res.data.forEach(item => {
          pictureList.push(item.src);
        });
        this.imgList = pictureList.map((item, index) => {
          return {
            id: index,
            name: item.substring(1, 5),
            url: require(`../api/${item.replace(/\\/g, "/")}`)
          };
        });
        // console.log(this.imgList);
      })
      .catch(err => {
        throw err;
      });
    // console.log(this.$http)
  },
  methods: {
    handleRemove(file, fileList) {
      let data = file.url.substring(file.url.lastIndexOf("/") + 1);
      let result = data.substring(0, data.indexOf("."));
      let name=data.substring(data.lastIndexOf('.'));
      // console.log(name)
      this.$http({
        method: "post",
        url: "http://127.0.0.1:1116/api/deleteBannerData",
        data: {
          title: result,
          name:`${result}${name}`
        }
      });
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
  }
};
</script>