<template>
  <div class="home">
    <div v-for="l in links" :key="l.name">
      <router-link :to="l.path">{{ l.name }}</router-link>
    </div>
    ?

<!--    <router-link to="/flexbox">FlexBox</router-link>-->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data () {
    return {
      links: [
        {
          name: '下拉刷新',
          path: '/pull'
        },
        {
          name: 'FlexBox',
          path: '/flexbox'
        }
      ]
    }
  },
  components: {}
}
</script>
