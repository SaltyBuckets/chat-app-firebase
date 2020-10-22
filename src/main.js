import Vue from 'vue';
import App from './App.vue';
import store from './store';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import router from './router';
import axios from 'axios';
import { firestorePlugin } from 'vuefire';

Vue.use(firestorePlugin);

Vue.use(Buefy);
Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
