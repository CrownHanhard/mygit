<template>
    <div class="singer" ref="singer">
        <listview :data="singerlist" v-on:select="selectSinger" ref="list"></listview>
        <router-view></router-view>
    </div>
</template>
<script>
    import  axios from  "axios";
    import listview from "../base/listview";
    import {mapMutations} from "vuex" //取得工具函数
    import {playlistMixin} from "../../common/js/mixin";

    export default {
        mixins:[playlistMixin],
        data(){
            return {
                singerlist:[]
            }
        },
        created() {
            //请求数据
            axios.get("/api/getSingerData").then(data=>{
                // eslint-disable-next-line no-console
                //onsole.log(data.data);
                this.singerlist=data.data;
            })
        },
        methods:{
            handlePlaylist(playlist){
                // 监听是否得到了playlist的值
                this.$refs.singer.style.bottom=playlist.length > 0 ? "70px" : "";
                this.$refs.list.refresh();
            },
            selectSinger(singerItem){//由子组件的点击事件触发的父组件事件
                this.$router.push({
                    path:`/singer/${singerItem.singer_mid}` //变更路由, 触发子组件
                });
                // eslint-disable-next-line no-console
                console.log(singerItem)
                this.setsinger(singerItem); //存储数据, 存储基本的歌手信息
            },
            ...mapMutations({ // 绑定对应的方法
                setsinger:"SET_SINGER"
            })
        },
        components:{
            listview
        }
    }
</script>

<style scoped lang="stylus">
    .singer
        position: fixed
        top: 88px
        bottom: 0
        width: 100%
</style>
