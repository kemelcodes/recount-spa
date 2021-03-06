import Vue from 'vue';
import App from './App.vue';
import { BootstrapVue } from 'bootstrap-vue';
import router from './router';
import store from './store';

// bootstrap css
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);

Vue.config.productionTip = false;


const app = new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app'); 

export default app;