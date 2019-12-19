<template>
  <div class="pull">
    <p class="refresh-text">{{text}}</p>
    <div>
<!--      <p>实现下拉刷新主要分为三步：</p>-->
<!--      <p>监听原生touchstart事件，记录其初始位置的值，e.touches[0].pageY；</p>-->
<!--      <p>监听原生touchmove事件，记录并计算当前滑动的位置值与初始位置值的差值，大于0表示向下拉动，并借助CSS3的translateY属性使元素跟随手势向下滑动对应的差值，同时也应设置一个允许滑动的最大值；</p>-->
<!--      <p>监听原生touchend事件，若此时元素滑动达到最大值，则触发callback，同时将translateY重设为0，元素回到初始位置。</p>-->
    </div>
    <ul :style="containerStyle" id="refresh-container"
        @touchmove="touchMove"
        @touchend="touchEnd"
        @touchstart="touchStart">
      <li>111</li>
      <li>222</li>
      <li>333</li>
      <li>444</li>
      <li>555</li>
      <li>111</li>
      <li>222</li>
      <li>333</li>
      <li>444</li>
      <li>555</li>
      <li>111</li>
      <li>222</li>
      <li>333</li>
      <li>444</li>
      <li>555</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PullRefresh',
  data () {
    return {
      text: 'PULL(在 Mobile 模式下访问)',
      endText: '',
      containerStyle: {
        color: 'red'
      },
      startPosition: 0,
      transitionHeight: 0
    }
  },
  created () {
    window.onscroll = function (ev) {
      console.log('scroll: ', ev)
    }
  },
  methods: {
    touchStart (e) {
      console.log('touchstart: 初始位置', e.touches[0].pageY)
      // 记录初始位置
      this.startPosition = e.touches[0].pageY
      this.containerStyle = Object.assign({}, this.containerStyle, {
        position: 'relative',
        transition: 'transform 0s'
      })
    },
    touchMove (e) {
      console.log('touchmove: 当前位置', e.touches[0].pageY)
      // 记录当前移动的位置
      this.transitionHeight = e.touches[0].pageY - this.startPosition
      console.log('this.transitionHeight: ', this.transitionHeight)
      // 拉动的距离
      if (this.transitionHeight > 0 && this.transitionHeight < 600) {
        this.text = '下拉刷新'
        // 移动元素位置
        this.containerStyle = Object.assign({}, this.containerStyle, {
          transform: 'translateY(' + 60 + 'px)'
        })
        if (this.transitionHeight > 55) {
          this.text = '释放刷新'
        }
      }
    },
    touchEnd (e) {
      // 完成后，使用 CSS 还原元素位置
      this.containerStyle = Object.assign({}, this.containerStyle, {
        transform: 'translateY(0px)',
        transition: 'transform 0.5s ease 1s'
      })
      this.text = '更新中'
    }
  }
}
</script>

<style lang="stylus" scoped>
html,body,header,div,main,p,span,ul,li{ margin: 0; padding: 0; }

#refresh-container
  li
    background-color: #eee
    margin-bottom: 1px
    padding: 20px 10px
</style>
