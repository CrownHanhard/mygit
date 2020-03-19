<template>
  <div>
    <canvas></canvas>
    <el-row class="a_container">
      <div class="articleCnt" v-for="(item,index) in article" :key="index">
        <h1 class="a_title">{{item.name}}</h1>
        <el-tag class="a_type" effect="dark"> <router-link :to="{path:`/Blogs/${item.show}`}">{{ item.type }}</router-link></el-tag>
        <el-divider class="a_date" content-position="center">{{item.date}}</el-divider>
        <div class="a_cnt" v-html="item.detail"></div>
        <el-divider class="a_date" content-position="center">文章内容为转载，如有侵权，请联系博主及时处理</el-divider>
      </div>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      article: []
    };
  },
  created() {
    let self = this;
    function timestampToTime(timestamp) {
      var date = new Date(timestamp * 1); //时间戳为13位的话不需乘1000
      var Y = date.getFullYear() + "-";
      var M =
        (date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1) + "-";
      var D = date.getDate() + " ";
      var h = date.getHours() + ":";
      var m = date.getMinutes() + ":";
      var s = date.getSeconds();
      return Y + M + D + h + m + s;
    }
    function changeType(string) {
      switch (string) {
        case "xinde":
          return "心得体会";
          break;
        case "jianshe":
          return "网站建设";
          break;
        case "style":
          return "Css3 | Html5";
          break;
      }
    }
    function changeShow(string){
       switch (string) {
        case "xinde":
          return 1;
          break;
        case "jianshe":
          return 2;
          break;
        case "style":
          return 3;
          break;
      }
    }
    this.$http({
      method: "post",
      url: "http://127.0.0.1:1116/api/getBlogDetail",
      data: {
        id: self.$route.params.id
      }
    }).then(res => {
      res.data.forEach(item => {
        self.article.push({
          name: item.name,
          date: timestampToTime(item.date),
          type: changeType(item.type),
          detail: item.detail,
          show:changeShow(item.type)
        });
      });
    });
  },
  mounted() {
    var oC = document.querySelector("canvas");
    var cxt = oC.getContext("2d");
    var w = (oC.width = window.innerWidth);
    var h = (oC.height = window.innerHeight);
    var count = 30;
    var drops = []; // 每个雨滴
    var onOff = true;
    window.onresize = function() {
      w = oC.width = window.innerWidth;
      h = oC.height = window.innerHeight;
    };
    function Drop() {}
    Drop.prototype = {
      init: function() {
        this.x = random(1, w); // 水平位置随机
        this.y = 0; // 雨滴起始位置
        this.r = 1; // 半径
        this.vy = random(3, 5); // Y轴速度
        this.vr = 1; // 半径的速度
        this.a = 1; // 初始不透明 逐渐透明
        this.va = 0.95; // 透明度越乘越小
        this.l = random(h * 0.7, h * 0.9); // 雨滴的最大长度（位置）
      },
      // 绘制
      draw: function() {
        if (this.y > this.l) {
          // 达到了终点
          cxt.beginPath();
          cxt.strokeStyle = "rgba(255,255,255," + this.a + ")";
          cxt.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
          cxt.stroke();
        } else {
          cxt.beginPath();
          cxt.fillStyle = randomColor();
          cxt.fillRect(this.x, this.y, 2, 10);
        }

        this.updata();
      },
      updata: function() {
        if (this.y < this.l) {
          // 没有达到最大位置
          this.y += this.vy;
        } else {
          // 达到最大的位置
          if (this.a > 0.03) {
            //还没有完全透明掉
            this.r += this.vr;
            if (this.r > 50) {
              this.a *= this.va; // 越乘越小 最终透明掉 a接受于0
            }
          } else {
            this.init();
          }
        }
      }
    };

    //var oDrops = new Drop();
    // 不断更新位置
    function move() {
      if (onOff) {
        cxt.fillStyle = "rgba(0,0,0,0.1)";
        cxt.fillRect(0, 0, w, h);
      } else {
        cxt.clearRect(0, 0, w, h);
      }

      for (var i = 0; i < count; i++) {
        drops.push(new Drop());
        drops[i].draw();
      }
      requestAnimationFrame(move);
    }
    move();
    //console.log( drops )
    function random(min, max) {
      return Math.random() * (max - min) + min;
    }
    function randomColor() {
      var r = Math.floor(Math.random() * 256);
      var g = Math.floor(Math.random() * 256);
      var b = Math.floor(Math.random() * 256);
      return "rgb(" + r + "," + g + "," + b + ")";
    }
  },
  methods: {}
};
</script>
<style lang="less" >
canvas {
  position: fixed;
  width: 100%;
  left: 0;
  top: 10px;
  z-index: -1;
}

.articleCnt {
  width: 70%;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  padding: 20px;
  min-height: 700px;
  .a_title {
    text-align: center;
    line-height: 30px;
  }
  .a_type {
    text-align: center;
    margin: 0 auto;
    a{
      text-decoration:none;
      color:inherit;
    }
  }
  .a_cnt {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 1px;
    padding: 10px 0;
    img {
      display: block;
      width: 80%;
      margin: 10px auto;
    }
  }
}
</style>