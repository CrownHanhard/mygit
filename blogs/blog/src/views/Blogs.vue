<template>
  <div>
    <canvas id="J_dotLine" style="background-color: #000;" width="800" height="500"></canvas>
    <el-row>
      <transition
        name="zoom"
        enter-active-class="animated zoomInDown"
        leave-active-class="animated zoomOutDown"
        :duration="{enter:1000,leave:400}"
        mode="out-in"
      >
        <div v-if="show==1" key="1">
          <div class="custom_container">
            <el-button type="warning" class="l_btn" @click="changeShow3">Html5 | Css3</el-button>
            <h1>心得体会</h1>
            <el-button type="success" class="r_btn" @click="changeShow2">网站建设</el-button>

            <ul class="a_list" v-for="(item,index) in xinde" :key="index">
              <li>
                <span class="a_title">{{item.title}}</span>
                <span class="a_date">发表日期:{{item.date}}</span>
                <router-link :to="{path:`/detail/${item.id}`}"></router-link>
              </li>
              <el-divider></el-divider>
            </ul>
            <div class="a_pages">
              <el-pagination background layout="prev, pager, next" :total="total1"></el-pagination>
            </div>
          </div>
        </div>
        <div v-else-if="show==2" key="2">
          <div class="custom_container">
            <el-button type="warning" class="l_btn" @click="changeShow1">心得体会</el-button>
            <h1>网站建设</h1>
            <el-button type="success" class="r_btn" @click="changeShow3">Html5 | Css3</el-button>
            <ul class="a_list" v-for="(item,index) in jianshe" :key="index">
              <li>
                <span class="a_title">{{item.title}}</span>
                <span class="a_date">发表日期:{{item.date}}</span>
                <router-link :to="{path:`/detail/${item.id}`}"></router-link>
              </li>
              <el-divider></el-divider>
            </ul>
            <div class="a_pages">
              <el-pagination background layout="prev, pager, next" :total="total2"></el-pagination>
            </div>
          </div>
        </div>
        <div v-else-if="show==3" key="3">
          <div class="custom_container">
            <el-button type="warning" class="l_btn" @click="changeShow2">网站建设</el-button>
            <h1>Html5 | Css3</h1>
            <el-button type="success" class="r_btn" @click="changeShow1">心得体会</el-button>
            <ul class="a_list" v-for="(item,index) in styleCnt" :key="index">
              <li>
                <span class="a_title">{{item.title}}</span>
                <span class="a_date">发表日期:{{item.date}}</span>
                <router-link :to="{path:`/detail/${item.id}`}"></router-link>
              </li>
              <el-divider></el-divider>
            </ul>
            <div class="a_pages">
              <el-pagination background layout="prev, pager, next" :total="total3"></el-pagination>
            </div>
          </div>
        </div>
      </transition>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      xinde: [],
      jianshe: [],
      styleCnt: [],
      total1: 1,
      total2: 1,
      total3: 1,
      show: 1
    };
  },
  mounted() {
    function Dotline(option) {
      this.opt = this.extend(
        {
          dom: "J_dotLine", //画布id
          cw: 1000, //画布宽
          ch: 500, //画布高
          ds: 500, //点的个数
          r: 0.5, //圆点半径
          dis: 100 //触发连线的距离
        },
        option
      );
      this.c = document.getElementById(this.opt.dom); //canvas元素id
      this.ctx = this.c.getContext("2d");
      this.c.width = this.opt.cw; //canvas宽
      this.c.height = this.opt.ch; //canvas高
      this.dotSum = this.opt.ds; //点的数量
      this.radius = this.opt.r; //圆点的半径
      this.disMax = this.opt.dis * this.opt.dis; //点与点触发连线的间距
      this.dots = [];
      //requestAnimationFrame控制canvas动画
      var RAF =
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(callback) {
          window.setTimeout(callback, 1000 / 60);
        };
      var _self = this;
      //增加鼠标效果
      var mousedot = { x: null, y: null, label: "mouse" };
      this.c.onmousemove = function(e) {
        var e = e || window.event;
        mousedot.x = e.clientX - _self.c.offsetLeft;
        mousedot.y = e.clientY - _self.c.offsetTop;
      };
      this.c.onmouseout = function(e) {
        mousedot.x = null;
        mousedot.y = null;
      };
      //控制动画
      this.animate = function() {
        _self.ctx.clearRect(0, 0, _self.c.width, _self.c.height);
        _self.drawLine([mousedot].concat(_self.dots));
        RAF(_self.animate);
      };
    }
    //合并配置项，es6直接使用obj.assign();
    Dotline.prototype.extend = function(o, e) {
      for (var key in e) {
        if (e[key]) {
          o[key] = e[key];
        }
      }
      return o;
    };
    //画点
    Dotline.prototype.addDots = function() {
      var dot;
      for (var i = 0; i < this.dotSum; i++) {
        //参数
        dot = {
          x: Math.floor(Math.random() * this.c.width) - this.radius,
          y: Math.floor(Math.random() * this.c.height) - this.radius,
          ax: (Math.random() * 2 - 1) / 1.5,
          ay: (Math.random() * 2 - 1) / 1.5
        };
        this.dots.push(dot);
      }
    };
    //点运动
    Dotline.prototype.move = function(dot) {
      dot.x += dot.ax;
      dot.y += dot.ay;
      //点碰到边缘返回
      dot.ax *=
        dot.x > this.c.width - this.radius || dot.x < this.radius ? -1 : 1;
      dot.ay *=
        dot.y > this.c.height - this.radius || dot.y < this.radius ? -1 : 1;
      //绘制点
      this.ctx.beginPath();
      this.ctx.arc(dot.x, dot.y, this.radius, 0, Math.PI * 2, true);
      this.ctx.stroke();
    };
    //点之间画线
    Dotline.prototype.drawLine = function(dots) {
      var nowDot;
      var _that = this;
      //自己的思路：遍历两次所有的点，比较点之间的距离，函数的触发放在animate里
      this.dots.forEach(function(dot) {
        _that.move(dot);
        for (var j = 0; j < dots.length; j++) {
          nowDot = dots[j];
          if (nowDot === dot || nowDot.x === null || nowDot.y === null)
            continue; //continue跳出当前循环开始新的循环
          var dx = dot.x - nowDot.x, //别的点坐标减当前点坐标
            dy = dot.y - nowDot.y;
          var dc = dx * dx + dy * dy;
          if (Math.sqrt(dc) > Math.sqrt(_that.disMax)) continue;
          // 如果是鼠标，则让粒子向鼠标的位置移动
          if (nowDot.label && Math.sqrt(dc) > Math.sqrt(_that.disMax) / 2) {
            dot.x -= dx * 0.02;
            dot.y -= dy * 0.02;
          }
          var ratio;
          ratio = (_that.disMax - dc) / _that.disMax;

          _that.ctx.beginPath();
          _that.ctx.lineWidth = ratio / 2;
          _that.ctx.strokeStyle = "rgba(255,255,255," + (ratio + 0.2) + ")";
          _that.ctx.moveTo(dot.x, dot.y);
          _that.ctx.lineTo(nowDot.x, nowDot.y);
          _that.ctx.stroke(); //不描边看不出效果

          //dots.splice(dots.indexOf(dot), 1);
        }
      });
    };
    //开始动画
    Dotline.prototype.start = function() {
      var _that = this;
      this.addDots();
      setTimeout(function() {
        _that.animate();
      }, 100);
    };
    //调用
    var dotline = new Dotline({
      dom: "J_dotLine", //画布id
      cw: 800, //画布宽
      ch: 500, //画布高
      ds: 50, //点的个数
      r: 0.5, //圆点半径
      dis: 80 //触发连线的距离
    }).start();
  },
  created() {
    this.show=this.$route.params.id;
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
    this.$http({
      method: "post",
      url: "http://127.0.0.1:1116/api/getTypeData",
      data: {
        type1: "xinde",
        type2: "jianshe",
        type3: "style"
      }
    })
      .then(res => {
        res.data.type1.forEach(item => {
          this.xinde.push({
            title: item.name,
            date: timestampToTime(item.date),
            id: item.date
          });
        });
        res.data.type2.forEach(item => {
          this.jianshe.push({
            title: item.name,
            date: timestampToTime(item.date),
            id: item.date
          });
        });
        res.data.type3.forEach(item => {
          this.styleCnt.push({
            title: item.name,
            date: timestampToTime(item.date),
            id: item.date
          });
        });
      })
      .catch(err => {
        throw err;
      });
    this.$http({
      method: "post",
      url: "http://127.0.0.1:1116/api/getPagesData",
      data: {
        pages: 0,
        total: this.total1
      }
    })
      .then(res => {
        this.total1 = Math.ceil(res.data.total1 / 7);
        this.total2 = Math.ceil(res.data.total2 / 7);
        this.total3 = Math.ceil(res.data.total3 / 7);
      })
      .catch(err => {
        throw err;
      });
  },
  methods: {
    changeShow1() {
      this.show = 1;
    },
    changeShow2() {
      this.show = 2;
    },
    changeShow3() {
      this.show = 3;
    }
  }
};
</script>
<style lang="less">
.custom_container {
  width: 80%;
  height: 700px;
  margin: 0 auto;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  background: #fafafa;
  position: relative;
  padding: 5px;
  h1 {
    text-align: center;
    line-height: 30px;
    margin-top: 10px;
  }
  .l_btn {
    position: absolute;
    left: 10px;
    top: 10px;
  }
  .r_btn {
    position: absolute;
    right: 10px;
    top: 10px;
  }
  .a_list {
    margin: 30px;
    li {
      display: flex;
      justify-content: space-between;
      list-style: none;
      color: #303133;
      line-height: 30px;
      letter-spacing: 1px;
      position: relative;
      cursor: pointer;
      .a_title {
        flex: 2;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      .a_date {
        flex: 1;
        font-size: 14px;
        color: #ccc;
        text-overflow: clip;
        overflow: hidden;
        white-space: nowrap;
      }
      a {
        position: absolute;
        display: inline-block;
        width: 100%;
        height: 100%;
        left: 0;
        right: 0;
      }
    }
  }
  .a_pages {
    position: absolute;
    width: 100%;
    bottom: 20px;
    left: 0;
    text-align: center;
  }
}
</style>

