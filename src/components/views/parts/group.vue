<!-- <template v-for='(item__,index__) in item_.children'>
  <el-submenu :index="index_+'1'" v-if='item_.children.length>0'>
    <template slot="title"><i :class="item.iconCls"></i>{{item__.name}}</template>
</template> -->
<template lang="html">
  <el-submenu :index="id">
    <template slot="title">{{nodeName}}</template>
    <its v-for="item in menuGroup" :item="item"></its>
  </el-submenu>
</template>

<script>
import items from './items.vue'
export default {
  data () {
    return {}
  },
  props:[
    'menuGroup',
    'id',
    'nodeName'
  ],
  computed: {},
  mounted () {},
  methods: {},
  components: {
    'its': items
  }
}
</script>

<style lang="css">
</style>
