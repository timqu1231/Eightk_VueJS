import Vue from 'vue'
import App from './App.vue'
import VueVirtualScroller from 'vue-virtual-scroller'

Vue.config.productionTip = false
Vue.use(VueVirtualScroller)

new Vue({
  render: h => h(App),
}).$mount('#app')
