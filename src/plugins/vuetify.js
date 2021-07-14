import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import {pt} from 'vuetify/lib/locale'

Vue.use(Vuetify)

const opts = {
  icons: {
    iconfont: 'mdiSvg', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
  },
  lang:{
    locales:{pt},
    current: 'pt'

  }
}

export default new Vuetify(opts)
