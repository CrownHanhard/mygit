<template>
  <div class="home">
    <el-row :gutter="20" id="main">
      <el-col :offset="1" :span="10">
        <Banner></Banner>
      </el-col>
      <el-col :span="6">
        <el-row type="flex" class="flexBox" justify="space-between" align="middle">
          <div class="flex-item" v-for="(item,index) in items" :key="index">
            <img :src="item.src" style="width:100%;height:100%;" alt />
            <div class="model">
              <div class="modeltext">{{item.text}}</div>
            </div>
          </div>
        </el-row>
      </el-col>
      <el-col :span="6">
        <div class="mainmsg">
          <div class="maintitle">我的名片</div>
          <ul class="maincnt">
            <li>网名：CrownHan | 桂马</li>
            <li>职业：Web前端工程师</li>
            <li>现居：河南省平顶山市</li>
            <li>Email：15592191450@163.com</li>
          </ul>
          <div class="btn">
            <div class="btnitem">
              <i class="icon el-icon-house"></i>
            </div>
            <div class="btnitem">
              <i class="icon el-icon-user-solid"></i>
            </div>
            <div class="btnitem">
              <i class="icon el-icon-sunny"></i>
            </div>
            <div class="btnitem">
              <i class="icon el-icon-share"></i>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row id="custom_recommend">
      <el-col class="custom_left" :offset="1" :span="16">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="推荐列表" name="first">
            <el-row>
              <el-col :span="10">
                <el-row type="flex" class="flexBox" justify="space-around" align="middle">
                  <div class="flex-item" v-for="(item,index) in items" :key="index">
                    <img :src="item.src" style="width:100%;height:100%;" alt />
                    <div class="model">
                      <div class="modeltext">{{item.text}}</div>
                    </div>
                  </div>
                </el-row>
              </el-col>
              <el-col class="recommend_title" :offset="1" :span="13">
                <ul>
                  <li v-for="(item,index) in article" :key="index">
                    <div>
                      <i></i>
                      <span class="article_title">{{item.title}}</span>
                    </div>
                    <span class="article_cnt">
                      <router-link :to="{path:`/detail/${item.id}`}">{{item.text}}</router-link>
                    </span>
                  </li>
                </ul>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="Css3|Html5" name="second">
            <el-row>
              <el-col :span="10">
                <el-row type="flex" class="flexBox" justify="space-around" align="middle">
                  <div class="flex-item" v-for="(item,index) in items" :key="index">
                    <img :src="item.src" style="width:100%;height:100%;" alt />
                    <div class="model">
                      <div class="modeltext">{{item.text}}</div>
                    </div>
                  </div>
                </el-row>
              </el-col>
              <el-col class="recommend_title" :offset="1" :span="13">
                <ul>
                  <li v-for="(item,index) in styleCnt" :key="index">
                    <div>
                      <i></i>
                      <span class="article_title">{{item.title}}</span>
                    </div>
                    <span class="article_cnt">
                      <router-link :to="{path:`/detail/${item.id}`}">{{item.text}}</router-link>
                    </span>
                  </li>
                </ul>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="网站建设" name="third">
            <el-row>
              <el-col :span="10">
                <el-row type="flex" class="flexBox" justify="space-around" align="middle">
                  <div class="flex-item" v-for="(item,index) in items" :key="index">
                    <img :src="item.src" style="width:100%;height:100%;" alt />
                    <div class="model">
                      <div class="modeltext">{{item.text}}</div>
                    </div>
                  </div>
                </el-row>
              </el-col>
              <el-col class="recommend_title" :offset="1" :span="13">
                <ul>
                  <li v-for="(item,index) in jianshe" :key="index">
                    <div>
                      <i></i>
                      <span class="article_title">{{item.title}}</span>
                    </div>

                    <span class="article_cnt">
                      <router-link :to="{path:`/detail/${item.id}`}">{{item.text}}</router-link>
                    </span>
                  </li>
                </ul>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="设计心得" name="fourth">
            <el-row>
              <el-col :span="10">
                <el-row type="flex" class="flexBox" justify="space-around" align="middle">
                  <div class="flex-item" v-for="(item,index) in items" :key="index">
                    <img :src="item.src" style="width:100%;height:100%;" alt />
                    <div class="model">
                      <div class="modeltext">{{item.text}}</div>
                    </div>
                  </div>
                </el-row>
              </el-col>
              <el-col class="recommend_title" :offset="1" :span="13">
                <ul>
                  <li v-for="(item,index) in xinde" :key="index">
                    <div>
                      <i></i>
                      <span class="article_title">{{item.title}}</span>
                    </div>
                    <span class="article_cnt">
                      <router-link :to="{path:`/detail/${item.id}`}">{{item.text}}</router-link>
                    </span>
                  </li>
                </ul>
              </el-col>
            </el-row>
          </el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col class="custom_right" :span="6">
        <el-card class="box-card" shadow="hover">
          <div slot="header" class="clearfix">
            <span>最近更新</span>
            <el-button style="float: right; padding: 3px 0" type="text">换一批</el-button>
          </div>
          <div v-for="(o,i) in recentCnt" :key="i" class="text item a_news">
            <span class="a_new_title"><router-link :to="{path:`/detail/${o.id}`}">{{o.title}}</router-link></span>
            <span class="a_new_cnt">{{o.date}}</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from "../components/banners/Banner.vue";
export default {
  name: "Home.vue",
  components: {
    Banner: Banner
  },
  data() {
    return {
      items: [
        {
          src: require("../assets/banner_1.jpg"),
          text: "为什么说10月24日是程序员的节日？"
        },
        {
          src: require("../assets/banner_2.jpg"),
          text: "个人博客做好了，百度不收怎么办"
        }
      ],
      article: [],
      xinde: [],
      jianshe: [],
      styleCnt: [],
      recentCnt: [],
      activeName: "first"
    };
  },
  created() {
    function getDateDiff(dateTimeStamp) {
      var result = "";
      var minute = 1000 * 60;
      var hour = minute * 60;
      var day = hour * 24;
      var month = day * 30;
      var now = new Date().getTime();
      var diffValue = now - dateTimeStamp;
      if (diffValue < 0) return;
      var monthC = diffValue / month;
      var weekC = diffValue / (7 * day);
      var dayC = diffValue / day;
      var hourC = diffValue / hour;
      var minC = diffValue / minute;
      if (monthC >= 1) {
        result = "" + parseInt(monthC) + "月前";
      } else if (weekC >= 1) {
        result = "" + parseInt(weekC) + "周前";
      } else if (dayC >= 1) {
        result = "" + parseInt(dayC) + "天前";
      } else if (hourC >= 1) {
        result = "" + parseInt(hourC) + "小时前";
      } else if (minC >= 1) {
        result = "" + parseInt(minC) + "分钟前";
      } else {
        result = "刚刚";
      }
      return result;
    }
    this.$http
      .get("http://127.0.0.1:1116/api/getRecommendData")
      .then(res => {
        res.data.forEach(item => {
          this.article.push({
            title: item.name,
            text: item.detail
              .substring(0, 50)
              .replace(/<p>/g, "")
              .replace(/<\/p>/g, ","),
            id: item.date
          });
        });
        // console.log(res)
      })
      .catch(err => {
        throw err;
      });
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
            text: item.detail
              .substring(0, 50)
              .replace(/<p>/g, "")
              .replace(/<\/p>/g, ","),
            id: item.date
          });
        });
        res.data.type2.forEach(item => {
          this.jianshe.push({
            title: item.name,
            text: item.detail
              .substring(0, 50)
              .replace(/<p>/g, "")
              .replace(/<\/p>/g, ","),
            id: item.date
          });
        });
        res.data.type3.forEach(item => {
          this.styleCnt.push({
            title: item.name,
            text: item.detail
              .substring(0, 50)
              .replace(/<p>/g, "")
              .replace(/<\/p>/g, ","),
            id: item.date
          });
        });
      })
      .catch(err => {
        throw err;
      });
    this.$http.get("http://127.0.0.1:1116/api/getNewData").then(res => {
      res.data.forEach(item => {
        this.recentCnt.push({
          title: item.name,
          date: getDateDiff(item.date),
          id:item.date
        });
      });
    });
    // console.log(this.recentCnt)
  },
  methods: {
    handleClick(tab, event) {}
  }
};
</script>
<style lang="less" scoped>
#main {
  height: 45vh;
  .el-col {
    height: 100%;
    .flexBox {
      flex-direction: column;
      height: 100%;
      .flex-item {
        cursor: pointer;
        overflow: hidden;
        height: 48%;
        position: relative;
        img {
          transition: 0.5s linear;
        }
        .model {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background: rgba(0, 0, 0, 0.4);
          z-index: 2;
          .modeltext {
            // display: none;
            color: white;
            text-align: center;
            line-height: 20px;
            padding: 10% 0;
          }
        }
        &:hover img {
          transform: scale(1.1);
        }
      }
    }
    .mainmsg {
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      flex-direction: column;
      .maintitle {
        width: 100%;
        height: 40px;
        line-height: 40px;
        font-size: 22px;
        color: rgba(255, 255, 255, 0.6);
        text-indent: 20px;
      }
      .maincnt {
        height: auto;
        li {
          list-style: none;
          height: 30px;
          color: #fff;
          font-size: 14px;
        }
      }
      .btn {
        width: 100%;
        height: 50px;
        display: flex;
        flex-direction: row;
        .btnitem {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          line-height: 50px;
          text-align: center;
          margin: 0px 12px;
          box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.1),
            inset 0px 1px 1px rgba(0, 0, 0, 0.7);
          cursor: pointer;
          &:hover {
            background: rgba(0, 0, 0, 0.3);
          }
          .icon {
            text-align: center;
            color: orangered;
            font-size: 20px;
          }
        }
      }
    }
  }
}
#custom_recommend {
  margin-top: 20px;
  height: 374px;
  overflow: hidden;
  .custom_left {
    background: #fafafa;
    overflow: hidden;
  padding:10px;

    .el-tabs__content {
      height: 320px;
    }
    .flexBox {
      flex-direction: column;
      height: 320px;
      .flex-item {
        cursor: pointer;
        overflow: hidden;
        height: 155px;
        position: relative;
        img {
          transition: 0.5s linear;
        }
        .model {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background: rgba(0, 0, 0, 0.4);
          z-index: 2;
          .modeltext {
            // display: none;
            color: white;
            text-align: center;
            line-height: 20px;
            padding: 10% 0;
          }
        }
        &:hover img {
          transform: scale(1.1);
        }
      }
    }
    .recommend_title {
      ul {
        li {
          overflow: hidden;
          list-style: none;
          position: relative;
          div {
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            padding: 2px;
            i {
              display: inline-block;
              width: 20px;
              height: 20px;
              position: relative;
              vertical-align: middle;
              font-style: normal;
              &::before {
                counter-increment: subsection;
                content: counter(subsection);
                color: #fff;
                text-align: center;
                display: inline-block;
                position: absolute;
                width: 20px;
                height: 20px;
                line-height: 20px;
                background: #000;
                top: 0;
                left: 0;
              }
            }
            .article_title {
              line-height: 30px;
              font-size: 16px;
              margin-left: 10px;
              vertical-align: middle;
              color: #000;
              font-weight: 500;
            }
          }
          .article_cnt {
            display: none;
            font-size: 14px;
            letter-spacing: 1px;
            text-indent: 20px;
            padding: 2px;
            a {
              text-decoration: none;
              color: inherit;
            }
          }
          &:hover .article_cnt {
            width: 80%;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            font-weight: 300;
            margin: 0 auto;
            cursor: pointer;
          }
          &:hover {
            background: #fafafa;
          }
        }
      }
    }
  }
  .custom_right {
    overflow: hidden;
    margin-left:15px;
    .text {
      font-size: 14px;
    }

    .item {
      margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
      display: table;
      content: "";
    }
    .clearfix:after {
      clear: both;
    }

    .box-card {
      .a_news {
        display: flex;
        .a_new_title {
          flex: 2;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          a{
            text-decoration: none;
            color:inherit;
          }
        }
        .a_new_cnt {
          flex: 1;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
      }
    }
  }
}
</style>
