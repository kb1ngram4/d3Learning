import Vue from 'vue'
import App from './App.vue';
import router from "./router/index"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "../src/utils/commStyle.css";
let echarts =  require('echarts')
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false;
import "video.js/dist/video-js.css";
import Video from "video.js";
Vue.prototype.$video = Video;
import html2canvas from "html2canvas"
import jspdf from "jspdf"
Vue.use(ElementUI)
Vue.prototype.$html2canvas = html2canvas
Vue.prototype.$jspdf = jspdf


new Vue({
  router,
  render: h => h(App)
  
}).$mount('#app')
