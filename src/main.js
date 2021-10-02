import Vue from 'vue'
import App from './App.vue'
import VueVditor from 'vue-vditor';
import 'vditor/dist/index.css';

Vue.use(VueVditor);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
