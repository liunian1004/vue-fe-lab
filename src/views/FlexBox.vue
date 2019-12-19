<template>
  <div class="container">
    <div class="flex" :style="flexStyle">
      <div  v-for="(s, index) in itemStyles" :key="Math.random()"
            class="item" :style="s">{{ index + 1 }}
      </div>
    </div>
    <el-row style="margin-top: 1rem">
      <el-button @click="pushItem">Add Item</el-button>
      <el-button @click="pushItems(10)">Add 10 Item</el-button>
    </el-row>
    <el-row>
      <el-col :span="8">
        <h2>控制台</h2>
        <el-divider></el-divider>
        <el-form :model="flexStyle">
          <h3>Ordering and Orientation</h3>
          <el-form-item label="flex-direction">
            <el-select v-model="flexStyle.flexDirection" placeholder="flex-direction">
              <el-option label="row(default)" value="row"></el-option>
              <el-option label="row-reverse" value="row-reverse"></el-option>
              <el-option label="column" value="column"></el-option>
              <el-option label="column-reverse" value="column-reverse"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="flex-wrap">
            <el-select v-model="flexStyle.flexWrap">
              <el-option label="nowrap(default)" value="nowrap"></el-option>
              <el-option label="wrap" value="wrap"></el-option>
              <el-option label="wrap-reverse" value="wrap-reverse"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="flex-flow(direction || wrap 缩写)">
            <el-select v-model="flexStyle.flexFlow">
              <el-option label="row nowrap(default)" value="row nowrap"></el-option>
              <el-option label="row wrap" value="row wrap"></el-option>
            </el-select>
          </el-form-item>
          <el-divider></el-divider>
          <h3>Alignment</h3>
          <el-form-item label="justify-content">
            <el-select v-model="flexStyle.justifyContent" placeholder="flex-direction">
              <el-option label="flex-start(default)" value="flex-start"></el-option>
              <el-option label="flex-end" value="flex-end"></el-option>
              <el-option label="center" value="center"></el-option>
              <el-option label="space-between" value="space-between"></el-option>
              <el-option label="space-around" value="space-around"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="16">
        <div v-for="(s, index) in itemStyles" :key="index">
          <h2>改变 Item{{ index + 1}} 属性</h2>
            <el-form>
              <el-form-item label="flex-grow（多余的空间怎么分配）">
                <el-select v-model="s.flexGrow" placeholder="flex-grow">
                  <el-option label="0" :value="0"></el-option>
                  <el-option label="1" :value="1"></el-option>
                  <el-option label="2" :value="2"></el-option>
                  <el-option label="3" :value="3"></el-option>
                  <el-option label="4" :value="4"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import * as R from 'ramda'
export default {
  name: 'FlexBox',
  data () {
    return {
      flexStyle: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        flexFlow: '',
        justifyContent: 'flex-start',
        alignItems: '',
        alignContent: ''
      },
      itemStyles: [],
      update: true
    }
  },
  created () {
    this.pushItem()
    this.pushItem()
    this.pushItem()
    this.pushItem()
  },
  methods: {
    pushItem () {
      let item = {
        flex: null,
        flexGrow: 0,
        flexShrink: null,
        flexBasis: null,
        alignSelf: null,
        order: null,
        backgroundColor: `#${this.randomColor()}`
      }
      this.itemStyles.push(item)
    },
    pushItems (number) {
      for (let i = 0; i < number; i++) {
        this.pushItem()
      }
    },
    randomColor () {
      const rand = Math.floor(Math.random() * 0xFFFFFF).toString(16)
      if (rand.length === 6) {
        return rand
      } else {
        return this.randomColor()
      }
    },
    changeGrow (index, value) {
      // change all array
      const item = this.itemStyles[index]
      item.flexGrow = value
      this.$set(this.itemStyles, index, item)
      console.log('after:', JSON.stringify(this.itemStyles))
      // this.$set(this.itemStyles[index], 'flexGrow', value)
      // this.$forceUpdate()
      // this.reload()
    },
    itemStyle (index) {
      return this.itemStyles[index]
    },
    reload () {
      // 移除组件
      this.update = false
      // 在组件移除后，重新渲染组件
      // this.$nextTick可实现在DOM 状态更新后，执行传入的方法。
      this.$nextTick(() => {
        this.update = true
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.flex {
  display flex
  border 1px solid red
}

.item {
  width 100px
  height 100px
  /*background-color aquamarine*/
  font-size 2rem
  text-align center
  vertical-align: baseline
}

</style>
