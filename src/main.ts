import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

if (!location.search.includes('home')) {
  document.body.style.opacity = '0.03'
}
