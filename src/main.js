import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import pub from './public/public'
import './public/init.css'
Vue.config.productionTip = false
Vue.prototype.pub = pub//公共插件
Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
