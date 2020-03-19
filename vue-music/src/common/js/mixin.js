import {mapGetters} from 'vuex'
export const playlistMixin = {
    computed:{
        ...mapGetters([
            'playlist' //获取播放列表
        ])
    },
    mounted() {
        this.handlePlaylist(this.playlist)
    },
    activated() {
        this.handlePlaylist(this.playlist)
    },
    watch: {
        playlist(newVal) {
            this.handlePlaylist(newVal)
        }
    },
    methods: {
        handlePlaylist() {
            //如果 我们自己在引用的组件实现了handlePlayList的方法, 那么这个函数就不会被执行
            //要是自己没实现就直接报错
            throw new Error('组件中必须实现handlePlaylist方法')
        }
    }
}
