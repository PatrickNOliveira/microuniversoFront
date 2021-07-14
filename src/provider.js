import Vuex from 'vuex';
import Vue from 'vue';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

const state = {
  token: null,
  user: null
}

const mutations = {
  LOGIN_USER(state, {token, user}){
    state.user = user;
    state.token = token;
  },
  LOGOUT_USER(state){
    state.userId = null;
    state.token = null;
    sessionStorage.clear();
  }
}


export default new Vuex.Store({
  plugins: [createPersistedState({
    storage: window.sessionStorage,
  })],
  state,
  mutations
})
