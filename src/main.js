/* ============
 * Main File
 * ============
 *
 * Will initialize the application.
 */

import Vue from 'vue';

/* ============
 * Plugins
 * ============
 *
 * Import and bootstrap the plugins.
 */

import './plugins/vuex';
import './plugins/axios';
import './plugins/vue-i18n';
import './plugins/vue-router';
import './plugins/vuex-router-sync';
import './plugins/bootstrap';
import './plugins/font-awesome';


import './assets/stylus/app.styl';

/* ============
 * Main App
 * ============
 *
 * Last but not least, we import the main application.
 */

import App from './app';
import store from './store';

store.dispatch('auth/check');

Vue.config.productionTip = false;

const vm = new Vue({
  render: h => h(App),
}).$mount('#app');
