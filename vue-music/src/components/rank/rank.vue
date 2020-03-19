<template>
    <div class="rank" ref="rank">
        <scroll :data="topList" class="toplist" ref="toplist">
            <ul>
                <li @click="selectItem(item)" class="item" v-for="(item,index) in topList" v-bind:key="index">
                <div class="icon">
                    <img width="100" height="100" :src="item.picUrl"/> <!-- 排行榜类别的图片 -->
                </div>
                <ul class="songlist">
                    <li class="song" v-for="(song,index) in item.songlist"  v-bind:key="index">
                        <span>{{index + 1}}</span>
                        <span>{{song.songName}}-{{song.singerName}}</span>
                    </li>
                </ul>
            </li>
            </ul>
            <div class="loading-container" v-show="!topList.length">
                <loading></loading>
            </div>
        </scroll>
        <router-view></router-view>
    </div>
</template>

<script >
    import Scroll from "../base/scroll"
    import Loading from '../base/loading'
    import {playlistMixin} from '../../common/js/mixin'
    import {mapMutations} from "vuex";
    export default {
        mixins: [playlistMixin],
        created() {
            this.$axios.get("/api/getRankData").then((data)=>{
                // eslint-disable-next-line no-console
                console.log(data.data)
                this.topList=data.data
            })
        },
        data() {
            return {
                topList: []
            }
        },
        methods: {
            ...mapMutations({
                setTopList:"SET_TOPLIST"
            }),
            handlePlaylist(playlist) {
                const bottom = playlist.length > 0 ? '60px' : ''
                this.$refs.rank.style.bottom = bottom
                this.$refs.toplist.refresh()
            },
            selectItem(item) {
                // eslint-disable-next-line no-console
                console.log(item);

                this.$axios.get(`/api/getRankDetailData/${item.topId}`).then((data)=>{
                    // eslint-disable-next-line no-console
                    console.log(data.data)
                    this.$router.push({
                        path: `/rank/${item.topId}`
                    });
                    this.setTopList(data.data);
                })

            }
        },
        components: {
            Scroll,
            Loading
        }
    }
</script>

<style scoped lang="stylus">

    @import "../../common/stylus/variable.styl"
    @import "../../common/stylus/mixin.styl"

    .rank
        position: fixed
        width: 100%
        top: 88px
        bottom: 0

        .toplist
            height: 100%
            overflow: hidden

            .item
                display: flex
                margin: 0 20px
                padding-top: 20px
                height: 100px

                &:last-child
                    padding-bottom: 20px

                .icon
                    flex: 0 0 100px
                    width: 100px
                    height: 100px

                .songlist
                    flex: 1
                    display: flex
                    flex-direction: column
                    justify-content: center
                    padding: 0 20px
                    height: 100px
                    overflow: hidden
                    background: $color-highlight-background
                    color: $color-text-d
                    font-size: $font-size-small

                    .song
                        no-wrap()
                        line-height: 26px

            .loading-container
                position: absolute
                width: 100%
                top: 50%
                transform: translateY(-50%)
</style>