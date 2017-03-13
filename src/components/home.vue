<template>
  <div id="home">
    <v-head :show='true'></v-head>
    <v-content :show="getsidebar.opened && !getsidebar.hidden" ></v-content>
    <v-sider :show="getsidebar.opened && !getsidebar.hidden" ></v-sider>
  </div>
</template>
<style>
#home{}
</style>
<script type="text/javascript">
import head from 'components/views/head.vue'
import sider from 'components/views/sider.vue'
import content from 'components/views/content.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
     return {

     }
  },
  beforeMount () {
    this.toggleSidebar(true)
  },
  props: {
  show: Boolean
  },
  components:{
    'v-head':head,
    'v-sider':sider,
    'v-content':content
  },
  computed: {
    ...mapGetters([
      'getcount',
      'getsidebar'
    ])
  },
  methods: {
    ...mapActions([
      'add_',
      'plus_',
      'toggleSidebar'
    ])
  }
}
</script>
