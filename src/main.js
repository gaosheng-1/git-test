import Vue from 'vue'
import App from './App.vue'
import router from "./router/index.js";
// 引入iview
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
/* 更改主题 */
import './my-theme/my-theme/dist/iview.css';
Vue.use(ViewUI);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
