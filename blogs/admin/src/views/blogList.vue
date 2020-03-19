<template>
  <div>
    <template>
      <el-table
        :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
        style="width: 100%"
      >
        <el-table-column label="ID" prop="id"></el-table-column>
        <el-table-column label="标题" prop="name"></el-table-column>
        <el-table-column label="是否推荐" prop="recommend"></el-table-column>
        <el-table-column label="日期" prop="date"></el-table-column>

        <el-table-column align="right">
          <template slot="header" slot-scope="scope">
            <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
          </template>
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          date: "2016-05-02"
        }
      ],
      search: ""
    };
  },
  created() {
    function timestampToTime(timestamp) {
      var date = new Date(timestamp*1); //时间戳为13位的话不需乘1000
      var Y = date.getFullYear() + "-";
      var M =(date.getMonth() + 1 < 10? "0" + (date.getMonth() + 1): date.getMonth() + 1) + "-";
      var D = date.getDate() + " ";
      var h = date.getHours() + ":";
      var m = date.getMinutes() + ":";
      var s = date.getSeconds();
      return Y + M + D + h + m + s;
    }
    this.$http
      .get("http://127.0.0.1:1116/api/getBlogData")
      .then(res => {
        let self = this;
        res.data.forEach(item => {
          console.log(item);
          self.tableData.push({
            id: item.date,
            name: item.name.substring(0, 10) + "···",
            recommend: item.recommend == true ? "推荐" : "未推荐",
            date: timestampToTime(item.date)
          });
        });
      })
      .catch(err => {
        throw err;
      });
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
};
</script>