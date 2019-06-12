// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './views'

Vue.config.productionTip = false
Vue.prototype._setThat = (target, that) => {
  target.that = that
}
/* eslint-disable no-new */
window.david = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
