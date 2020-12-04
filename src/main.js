import { createApp } from 'vue'
import App from './App.vue'

//import router, bootstrap, popper, jQuery
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'jquery/dist/jquery.min'
import 'popper.js/dist/popper.min'
import 'bootstrap/dist/js/bootstrap.min'

//menggunakan vue router

const app = createApp(App)

//use vue router
app.use(router)

app.mount('#app')


