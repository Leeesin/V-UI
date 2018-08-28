import Vue from 'vue'
import App from './App.vue'
import "./test/button";


Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')


// {
//   const Constructor = Vue.extend(Button)
//   const button = new Constructor()
//   button.$mount('#app')
// }