<template>
    <div class="progress-bar" ref="progressBar" @click="progressClick">
        <div class="bar-inner"><!--    进度条整体的部分    -->
            <div class="progress" ref="progress"></div><!--    进度条走过的部分    -->
            <div class="progress-btn-wrapper" ref="progressBtn"
                 @touchstart.prevent="progressTouchStart"
                 @touchmove.prevent="progressTouchMove"
                 @touchend="progressTouchEnd"
            ><!--    进度条的按钮部分  可以用触摸事件来调整播放的进度 -->
                <div class="progress-btn"></div>
            </div>
        </div>
    </div>
</template>
<script>
    import {prefixStyle} from "../../common/js/dom"; //这个是用来处理样式兼容的自定义前缀的
    const progressBtnWidth = 16;
    const transform = prefixStyle('transform');
    export default {
        props: {
            percent: { //百分比
                type: Number,
                default: 0
            }
        },
        created() {
            this.touch = {}
        },
        methods: {
            progressTouchStart(e) {
                // 获取初始位置, 并打开开关, 允许滑动
                this.touch.initiated = true;
                this.touch.startX = e.touches[0].pageX;//获取触摸位置
                this.touch.left = this.$refs.progress.clientWidth;//获取进度条走过的地方的元素的宽度
            },
            progressTouchMove(e) {
                //如果没有点中那个按钮就不要激活滑动事件
                if (!this.touch.initiated) {
                    return
                }
                const deltaX = e.touches[0].pageX - this.touch.startX ;// 计算手指滑动距离的差值
                const offsetWidth = Math.min(this.$refs.progressBar.clientWidth - progressBtnWidth, Math.max(0, this.touch.left + deltaX))
                //求得最大的偏移量,整个进度条走过的区域的最大宽度求值
                this._offset(offsetWidth);//设置宽度和偏移量
            },
            progressTouchEnd() {
                //手指抬起
                this.touch.initiated = false
                this._triggerPercent()
            },
            progressClick(e) {
                const rect = this.$refs.progressBar.getBoundingClientRect();//获取点击时的 按钮的位置参数
                const offsetWidth = e.pageX - rect.left;//获取点击位置和当前位置的偏移量
                this._offset(offsetWidth);//设置宽度和偏移量
                // 这里当我们点击 progressBtn 的时候，e.offsetX 获取不对
                // this._offset(e.offsetX)
                this._triggerPercent()
            },
            _triggerPercent() {
                const barWidth = this.$refs.progressBar.clientWidth - progressBtnWidth;//计算进度条可以使用的全部宽度
                const percent = this.$refs.progress.clientWidth / barWidth;//用已经滚多去的进度条宽度除以总宽度,得出比例
                this.$emit('percentChange', percent);//将比例参数传到父组件, 在父组件里面设置歌曲的进度
            },
            _offset(offsetWidth) {
                this.$refs.progress.style.width = `${offsetWidth}px`;//设置进度条滚过的区域的宽度
                this.$refs.progressBtn.style[transform] = `translate3d(${offsetWidth}px,0,0)`;//设置进度条按钮的偏移量
            }
        },
        watch: {
            percent(newPercent) {
                if (newPercent >= 0 && !this.touch.initiated) {
                    //当比例值发生变化时, 我们重新设置一次进度条的效果
                    // eslint-disable-next-line no-console
                    // console.log("this.$refs.progressBar.clientWidth",this.$refs.progressBar.clientWidth)
                    // eslint-disable-next-line no-console
                    // console.log("progressBtnWidth",progressBtnWidth)
                    // eslint-disable-next-line no-console
                    //console.log("进度条组件的百分比",newPercent);
                    const barWidth = this.$refs.progressBar.clientWidth - progressBtnWidth;
                    const offsetWidth = newPercent * barWidth;
                    this._offset(offsetWidth)
                }
            }
        }
    }
</script>

<style scoped lang="stylus">
    @import "../../common/stylus/variable.styl"

    .progress-bar
        height: 30px
        .bar-inner
            position: relative
            top: 13px
            height: 4px
            background: rgba(0, 0, 0, 0.3)
            .progress
                position: absolute
                height: 100%
                background: $color-theme
            .progress-btn-wrapper
                position: absolute
                left: -8px
                top: -13px
                width: 30px
                height: 30px
                .progress-btn
                    position: relative
                    top: 7px
                    left: 7px
                    box-sizing: border-box
                    width: 16px
                    height: 16px
                    border: 3px solid $color-text
                    border-radius: 50%
                    background: $color-theme
</style>