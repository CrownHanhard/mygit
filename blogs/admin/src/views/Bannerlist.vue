<template>
  <div>
    <el-alert title="首页banner" type="success" description="如不需要,请在文件上传处删除。"></el-alert>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="id" width="100"></el-table-column>
      <el-table-column label="描述图片" width="100">
        <template slot-scope="scope">
          <img :src="scope.row.img" width="40" height="40" class="head_pic" />
        </template>
      </el-table-column>
      <el-table-column prop="src" label="链接" width="340" overflow="hidden"></el-table-column>
      <el-table-column prop="title" label="名称"></el-table-column>
    </el-table>
  </div>
</template>

<script>
const newsimg=require('../api/banner/bannerimage/6b6cc2d15036e1480e11df4814b5a1a2.jpg');
export default {
  data() {
    return {
      tableData: [
        {
          id: 6,
          src: "王小虎",
          title: "上海市普陀区金沙江路 1518 弄",
          img:newsimg
        }
        //数据格式
      ]
    };
  },
  created() {
    this.$http
      .get("http://127.0.0.1:1116/api/getBannerData")
      .then(res => {
        res.data.forEach((item, index) => {
          this.tableData.push({
            src: item.src.substring(item.src.lastIndexOf("\\") + 1),
            title: item.title,
            id: index,
            img:require(`../api/banner/bannerimage/${item.src.substring(item.src.lastIndexOf("\\") + 1)}`)
          });
        });
      })
      .catch(err => {
        throw err;
      });
    // console.log(this.$http)
  },
  methods: {}
};
</script>