import Vue from 'vue'
import App from './App.vue'
import http from "./http";
import VueRouter from 'vue-router';
import provider from './provider';
import { routes } from './routes';
import vuetify from './plugins/vuetify'
import { library } from '@fortawesome/fontawesome-svg-core'
//import { faBars} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.use(VueRouter);

library.add()

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false


const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.prototype.$http = http;

new Vue({
  el: '#app',
  vuetify,
  router,
  components: { App },
  store: provider,
  render: h => h(App)
})
