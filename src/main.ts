import './assets/main.css'

import { createApp, reactive } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

const globalStore = reactive({ flashMessage: '' })
app.provide('GStore', globalStore) // make global store available for any component in the application

app.mount('#app')
