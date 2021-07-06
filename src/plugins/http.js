import Vue from 'vue';
import axios from 'axios';
import store from '@/store/index';

const { token } = store.state.auth;

if (token) {
  axios.defaults.headers.common.Authorization = token;
}

Vue.prototype.$http = axios;
