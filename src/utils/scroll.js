export default {
  // https://github.com/zuobaiquan/javascript/blob/master/h5%E4%B8%8B%E6%8B%89%E5%88%B7%E6%96%B0%E5%92%8C%E4%B8%8A%E6%8B%89%E5%8A%A0%E8%BD%BD%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86/pull-refresh-demo02.html
  // 获取当前滚动条的位置
  getScrollTop () {
    let scrollTop = 0
    if (document.documentElement && document.documentElement.scrollTop) {
      scrollTop = document.documentElement.scrollTop
    } else if (document.body) {
      scrollTop = document.body.scrollTop
    }
    return scrollTop
  },
  // 获取文档完整的高度
  getScrollHeight () {
    return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
  },
  // 获取当前可视范围的高度
  getClientHeight () {
    let clientHeight = 0
    if (document.body.clientHeight && document.documentElement.clientHeight) {
      clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight)
    } else {
      clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight)
    }
    return clientHeight
  }
}
