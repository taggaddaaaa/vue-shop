import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  /**
   * Here, We render the imported Component App on the html element #app (public/index.html).
   * Also, it compiles all the js scripts from files that are imported here
   * and auto injected them inside 'public/index.html' file
   */
  render: h => h(App),
}).$mount('#app')
