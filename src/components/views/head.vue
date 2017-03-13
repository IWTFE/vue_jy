<template id="">
<div class="head">
  <div class='headImg'>
    <img src='../../../src/images/logoinner.png' class="img_logo">
  </div>
  <div class='headWord'> |　投注资金账户系统
  </div>
  <!-- <div> {{ getcount }} </div>
  <button @click="add_">+</button><button @click="plus_">-</button> -->
  <v-user></v-user>
  <div class="nav" @click='toggleSidebar(getsidebar.hidden)'>
    <i class='icon-menus'></i>
  </div>
</div>
</template>
<script type="text/javascript">
import user from 'src/components/views/user.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {

    }
  },
  props: {
  show: Boolean
  },
  components: {
    'v-user': user
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
    ]),
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
<style media="screen" scoped>
.head {
  height: 60px;
  background: #e94d5b;
  line-height: 60px;
  padding: 0 20px 0 0;
  position:fixed;
  top:0;
  width:100%;
}

.headImg {
  float: left;
  margin-left: 22px;
}

.img_logo {
  vertical-align: middle;
}

.headWord {
  float: left;
  margin-left: 15px;
  font-size: 16px;
  font-family: "微软雅黑";
  line-height: 60px;
  color: #fff;
}

.nav {
  width: 60px;
  height: 60px;
  background: #e94d5b;
  float: right;
  cursor: pointer;
}

.nav {
  color: #fff;
}
</style>
