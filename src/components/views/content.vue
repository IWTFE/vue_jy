<template id="content">

   <div class="contentDiv animated" :class="{ width100: show, width238: !show }">
       <pre><code>{{demoTemp}}</code></pre>
       <!-- Table -->
    <router-view></router-view>
   </div>

</template>
<script>
import {
  mapGetters,
  mapActions
} from 'vuex'
export default {
  data() {
    return {
      demoTemp:[],
      gridData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px'
    }
  },
  amounted(){
    this.demoTemp = JSON.parse(sessionStorage.getItem('user'))
    console.log(this.demoTemp)
  },
  computed: {
    ...mapGetters([
      'getcount',
      'getsidebar',
      'menuitems',
      'getlist'
    ])
  },
  props: {
  show: Boolean
  },
  methods: {
    ...mapActions([
      'add_',
      'plus_',
      'toggleSidebar',
      'genTree'
    ])
}
}
</script>
<style>
@import '~animate.css';
.animated {animation-duration: .377s;}
.contentDiv{margin-left:238px;margin-top:60px;min-height:1000px;padding:10px;}
.width100{animation:mymove1 0.6s; animation-fill-mode:forwards;}
.width238{animation:mymove2 0.6s; animation-fill-mode:forwards;}

  @keyframes mymove1
{
from {margin-left:0px;}
to {margin-left:238px;}
}

@-webkit-keyframes mymove1 /*Safari and Chrome*/
{
from {margin-left:0px;}
to {left:238px;}
}

@keyframes mymove2
{
from {margin-left:238px;}
to {margin-left:0px;}
}

@-webkit-keyframes mymove1 /*Safari and Chrome*/
{
from {margin-left:238px;}
to {left:0px;}
}
</style>
