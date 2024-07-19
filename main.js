import App from './App'


// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})

app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import * as Pinia from 'pinia'
import 'vant/lib/index.css';
import { Tab, Tabs } from 'vant';
export function createApp() {
  const app = createSSRApp(App)
  app.use(Pinia.createPinia());
  app.use(Tab);
  app.use(Tabs);
  return {
    app,
	Pinia,
  }
}
// #endif