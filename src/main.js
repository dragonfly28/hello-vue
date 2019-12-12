import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import ruleset from './plugins/validationRules.js';

Vue.config.productionTip = false
Vue.use(ruleset);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
