import Vue from 'vue'
import App from './App.vue'
import myPlugin from "./components/plugin";
// import "./test/button";

Vue.use(myPlugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

