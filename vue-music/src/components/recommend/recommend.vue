<template>
  <div class="recommend" ref="recommend">
    <scroll class="recommend-content" v-bind:data="disclist" ref="list">
      <div>
        <!-- 滚动插件里面需要加一个子元素, 让内部的元素撑开高度 -->
        <div class="slider-wrapper" ref="sliderWrapper">
          <slider>
            <div
              v-for="item in sliderRecommends"
              v-bind:key="item.id"
            >
              <a>
                <img v-bind:src="item.cover" alt />
              </a>
            </div>
          </slider>
        </div>
        <div class="recommend-list">
          <h1 class="list-title">热门歌单推荐</h1>
          <ul>
            <li
              v-for="item in disclist"
              v-bind:key="item.id"
              class="item"
              v-on:click="selectItem(item)"
            >
              <div class="icon">
                <img width="60" height="60" v-bind:src="item.cover" />
              </div>
              <div class="text">
                <h2 class="name" v-html="item.category"></h2>
                <p class="desc" v-html="item.title"></p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="loading-container" v-show="!disclist.length">
        <!-- 在获取到数据之前加载 -->
        <loading></loading>
      </div>
    </scroll>
    <router-view></router-view>
  </div>
</template>
<script>
import Slider from "../base/slider";
import Scroll from "../base/scroll";
import loading from "../base/loading";
import { playlistMixin } from "../../common/js/mixin";
import { mapMutations } from "vuex";
export default {
  mixins: [playlistMixin],
  data() {
    return {
      sliderRecommends: [], //存放轮播的推荐信息
      disclist: [] //存储下面列表信息的推荐信息
    };
  },
  created() {
    this.$axios.get("/api/recommenddata").then(data => {
      this.sliderRecommends = data.data.shift().categoryList; //第一个歌 单列表作为轮播图的部分
      // console.log(data.data);
      // setTimeout(
      data.data.forEach(item => {
        //剩余的数据 作为剩下的列表部分
        item.categoryList.forEach(child_item => {
          //获取列表里面的核心数据
          child_item.category = item.category; //每个单独的数据,保存一下这个歌 单的父类数据
          //console.log(item)
          this.disclist.push(child_item);
        });
      });
      //   2000
      // );

      // console.log(this.disclist)
    });
  },
  methods: {
    ...mapMutations({
      setDisc: "SET_DISC"
    }),
    handlePlaylist(playlist) {
      // 监听是否得到了playlist的值
      this.$refs.recommend.style.bottom = playlist.length > 0 ? "50px" : "";
      this.$refs.list.refresh();
    },
    selectItem(item) {
      this.$axios.get(`/api/recommendDetail/${item.id}`).then(data => {
        // eslint-disable-next-line no-console
        console.log(data.data[0]);
        this.$router.push(`/recommend/${item.id}`); //设置路由
        this.setDisc(data.data[0]);
      });
    }
  },
  components: { Slider, Scroll, loading }
};
</script>
<style scoped lang="stylus">
@import '../../common/stylus/variable.styl';

.recommend {
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;

  .recommend-content {
    height: 100%;
    overflow: hidden;

    .slider-wrapper {
      position: relative;
      width: 100%;
      overflow: hidden;
    }

    .recommend-list {
      .list-title {
        height: 65px;
        line-height: 65px;
        text-align: center;
        font-size: $font-size-medium;
        color: $color-theme;
      }

      .item {
        display: flex;
        box-sizing: border-box;
        align-items: center;
        padding: 0 20px 20px 20px;

        .icon {
          flex: 0 0 60px;
          width: 60px;
          padding-right: 20px;
        }

        .text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex: 1;
          line-height: 20px;
          overflow: hidden;
          font-size: $font-size-medium;

          .name {
            margin-bottom: 10px;
            color: $color-text;
          }

          .desc {
            color: $color-text-d;
          }
        }
      }
    }

    .loading-container {
      position: absolute;
      width: 100%;
      top: 80%;
      transform: translateY(-50%);
    }
  }
}
</style>