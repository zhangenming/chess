import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { isBoss } from './lib/constant'

createApp(App).mount('#app')

if (isBoss) {
  const style = document.createElement('style')
  style.textContent = `
    body {  opacity: 0.05;}
    body:hover {  opacity: 0.2;}
  `
  document.head.appendChild(style)
}
