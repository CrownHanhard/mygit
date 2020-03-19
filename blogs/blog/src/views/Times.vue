<template>
  <div>
    <div style="">
      <el-timeline>
        <el-timeline-item timestamp="2016/9" placement="top">
          <el-card>
            <h4>初入大学</h4>
            <p>刚进入大学，比较好奇</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2017/9" placement="top">
          <el-card>
            <h4>初识编程</h4>
            <p>第一次接触编程，参加了互联网+大赛</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2018/9" placement="top">
          <el-card>
            <h4>初拿国奖</h4>
            <p>通过查找文档以及相关资料，做出了第一个程序并拿到了陕西省主赛道铜奖</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2019/9" placement="top">
          <el-card>
            <h4>初入公司</h4>
            <p>找到第一份工作，从事前端开发。也编写了第一个上线项目：臻鑫官网</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2020/3/1" placement="top">
          <el-card>
            <h4>完善自我，锻炼自我</h4>
            <p>马上毕业了，继续把前端知识巩固完善了一遍</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0
    };
  },

  methods: {
    next() {
      if (this.active++ > 4) this.active = 0;
    }
  }
};
</script>