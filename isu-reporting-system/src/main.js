import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { plugin, defaultConfig } from '@formkit/vue'

loadFonts()

createApp(App)
  .use(router)
  .use(vuetify, plugin, defaultConfig)
  .mount('#app')
