import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import "./assets/main.css";
import Vant from 'vant';
import 'vant/lib/index.css';
import store from './store'//引入store
import { Toast } from 'vant'
window.axios = require('axios');
Vue.use(Toast);
Vue.use(Vant);
// Vue.prototype.axios = axios;
Vue.use(ElementUI);
Vue.use(VueAxios, axios)

new Vue({
  axios,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
