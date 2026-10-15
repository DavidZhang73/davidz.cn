import { createApp, createSSRApp } from 'vue'
import App from './App.vue'
import './main.css'

// Development serves an empty root; production hydrates the prerendered HTML.
const app = import.meta.env.DEV ? createApp(App) : createSSRApp(App)
app.mount('#app')
