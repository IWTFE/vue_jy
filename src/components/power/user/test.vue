<template id="">
   <div>
     {{getArray}}
     <v-test-child></v-test-child>
   </div>
</template>
<script type="text/javascript">
import testchild from './test-child'
import {
  mapGetters,
  mapActions
} from 'vuex'
export default {

       computed: {
         ...mapGetters([
           'getcount',
           'getsidebar',
           'getArray'
         ])
       },
       methods: {
         ...mapActions([
           'add_',
           'plus_',
           'toggleSidebar',
           'test_'
         ])
       },
     components:{
       'v-test-child':testchild
     }
   }
</script>
<style media="screen">

</style>
