<template>
    <div class="song-list">
        <ul>
            <li v-for="(song,index) in songs" class="item" v-bind:key="song.songMid" @click="selectItem(song,index)">
                <div class="content">
                    <h2 class="name">{{song.songName}}</h2>
                    <p class="desc">{{singername}} -- {{song.songAlbum}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: {
            songs: {
                type: Array
            },
            singername: {
                type: String
            }
        },
        methods:{
            selectItem(item,index){
                this.$emit("select",item,index)
            }
        }

    }
</script>

<style scoped lang="stylus">
    @import "../../common/stylus/variable.styl"
    @import "../../common/stylus/mixin.styl"

    .song-list
        .item
            display: flex
            align-items: center
            box-sizing: border-box
            height: 64px
            font-size: $font-size-medium

            .rank
                flex: 0 0 25px
                width: 25px
                margin-right: 30px
                text-align: center

                .icon
                    display: inline-block
                    width: 25px
                    height: 24px
                    background-size: 25px 24px

                    &.icon0
                        bg-image('first')

                    &.icon1
                        bg-image('second')

                    &.icon2
                        bg-image('third')

                .text
                    color: $color-theme
                    font-size: $font-size-large

            .content
                flex: 1
                line-height: 20px
                overflow: hidden

                .name
                    no-wrap()
                    color: $color-text

                .desc
                    no-wrap()
                    margin-top: 4px
                    color: $color-text-d
</style>