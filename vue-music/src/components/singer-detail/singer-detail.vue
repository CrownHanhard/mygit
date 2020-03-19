<template>
    <!-- 增加个转场动画 -->
    <transition name="slide">
        <musiclist :title="title" :bgImage="bgImage" :songList="songList"></musiclist>
    </transition>
</template>

<script type="text/ecmascript-6">
    import musiclist from "../music-list/music-list";
    import {mapGetters} from "vuex";

    export default {
        computed:{
            ...mapGetters([
                "singer"
            ]),
            title(){//歌手名称
                return this.singer.singer_name;
            },
            bgImage(){ // 歌手图片
                return this.singer.singer_pic;
            },
            mid(){// 歌手mid
                return this.singer.singer_mid;
            }
        },
        data(){
            return {
                songList:[]//具体的歌曲信息
            }
        },
        created() {
            this._getDetail(this.mid)
        },
        methods:{
            _getDetail(mid){
                let data={
                    mid:mid
                };
                this.$axios.post("/api/getSingerDetailData",JSON.stringify(data)).then(data=>{
                    // eslint-disable-next-line no-console
                    // console.log(data)
                    this.songList=data.data.songList;
                })
            }
        },
        components:{
            musiclist
        }

    }

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .slide-enter-active, .slide-leave-active
        transition: all 0.3s

    .slide-enter, .slide-leave-to
        transform: translate3d(100%, 0, 0)
</style>