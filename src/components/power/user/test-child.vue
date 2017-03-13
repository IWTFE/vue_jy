<template id="">
  <div>
   <button @click='test_'>点击按钮</button>
   <input >
 </div>
</template>
<script type="text/javascript">
import {
  mapGetters,
  mapActions
} from 'vuex'
export default {
  data () {
    return {
      getarray:this.getbool_
    }
  },
  created() {
    this.getarray=this.getbool_
  },
  computed: {
    ...mapGetters([
      'getcount',
      'getsidebar',
      'getArray',
      'getbool'
    ])
  },
  watch:{
    getarray:'test'
  },
  methods: {
    test(val,oldval){
      console.log(val+"---"+oldval)
    },
    ...mapActions([
      'add_',
      'plus_',
      'toggleSidebar',
      'test_'
    ])
  }
}

</script>
<style media="screen">

</style>
