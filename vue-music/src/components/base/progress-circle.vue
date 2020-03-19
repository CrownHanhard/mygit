<template>
    <div class="progress-circle">
        <svg :width="radius" :height="radius" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle class="progress-background" r="50" cx="50" cy="50" fill="transparent"/> <!-- 内层圆 -->
            <circle class="progress-bar" r="50" cx="50" cy="50" fill="transparent" :stroke-dasharray="dashArray"
                    :stroke-dashoffset="dashOffset"/> <!-- 外层的进度条圈 -->
        </svg>
        <!-- 俩层svg -->
        <slot></slot> <!-- 这个用定位,定位在svg的上面, 这样就不会阻碍我们的点击事件 -->
    </div>
</template>

<script >
    export default {
        props: {
            radius: {
                type: Number,
                default: 100
            },
            percent: {
                type: Number,
                default: 0
            }
        },
        data() {
            return {
                dashArray: Math.PI * 100 // 2PI*r, 圆的周长 π
            }
        },
        computed: {
            dashOffset() {
                return (1 - this.percent) * this.dashArray //当前的弧度
            }
        }
    }
</script>

<style scoped lang="stylus" >
    @import "../../common/stylus/variable.styl"

    .progress-circle
        position: relative
        circle
            stroke-width: 8px
            transform-origin: center
            &.progress-background
                transform: scale(0.9)
                stroke: $color-theme-d
            &.progress-bar
                transform: scale(0.9) rotate(-90deg)
                stroke: $color-theme
</style>