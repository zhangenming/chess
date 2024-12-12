import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { isMaster } from './data'

if (!isMaster) {
  createApp(App).mount('#app')
}
