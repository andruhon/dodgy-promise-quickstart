import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';
import auth from './modules/auth';

Vue.use(Vuex);

const vuexPersist = new VuexPersist({
  key: 'unimarket-marketplace',
  storage: localStorage,
});

export default new Vuex.Store({
  modules: {
    auth,
  },
  plugins: [vuexPersist.plugin],
});
