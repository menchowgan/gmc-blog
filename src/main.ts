import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import "./mock/index"
import Axios from "./utils/http/instance"

const app = createApp(App)
app.use(store)
  .use(Axios)
  .use(router)
  .use(ElementPlus)
  .mount('#app')

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}