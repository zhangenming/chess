import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

// dbg
;(() => {
  Object.defineProperties(Object.prototype, {
    xx: {
      get() {
        if (this instanceof String) {
          console.log(String(this))
        } else {
          console.log(this)
        }
        return this
      },
    },
  })
})()

createApp(App).mount('#app')

if (!location.search.includes('home')) {
  document.body.style.opacity = '0.03'
}
