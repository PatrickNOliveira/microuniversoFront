import Vue from 'vue'
import App from './App.vue'
import http from "./http";
import VueRouter from 'vue-router';
import provider from './provider';
import { routes } from './routes';
import vuetify from './plugins/vuetify'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSignOutAlt} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.use(VueRouter);

library.add({
  faSignOutAlt
})

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

const router = new VueRouter({
  routes,
  mode: 'history'
});


//Antes de cada rota
router.beforeEach((to, from, next) => {
  //Verifica se a rota é publica ou se o token está setado
  if (!to.meta.public && !provider.state.token){
    //Se o token não estiver setado, impede que acesse a rota e manda para a tela inicial
    return next({path: '/home'})
  }
  next()
})

Vue.prototype.$http = http;

new Vue({
  el: '#app',
  vuetify,
  router,
  components: { App },
  store: provider,
  render: h => h(App)
})
