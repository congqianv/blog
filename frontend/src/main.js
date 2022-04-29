import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

import '@/assets/styles/common.less'

const app = createApp(App)
app.use(router).mount('#app')
