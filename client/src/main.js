// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
import Vue from 'vue'
import App from './App'
import VueVirtualScroller from 'vue-virtual-scroller'
import router from './router'

Vue.config.productionTip = false
Vue.use(VueVirtualScroller)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
