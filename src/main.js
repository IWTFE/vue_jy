// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'  //引入vuex
import router from './router'
import normalize from 'normalize.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import style from 'src/css/style.css'
import NProgress from 'nprogress'//页面顶部进度条
import 'nprogress/nprogress.css'
Vue.use(ElementUI)

NProgress.configure({ showSpinner: false });
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
