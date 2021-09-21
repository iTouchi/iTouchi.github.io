import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import axios from 'axios'; // Docs: https://axios-http.com/docs/api_intro
import VueAxios from 'vue-axios';

import VueGtm from '@gtm-support/vue2-gtm'; // Docs: https://www.npmjs.com/package/@gtm-support/vue2-gtm

import * as Sentry from "@sentry/browser"; // Docs: https://docs.sentry.io/platforms/javascript/guides/vue/
import {Integrations} from "@sentry/tracing";

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);

const { VUE_APP_GTM_ID, VUE_APP_SENTRY_DSN, NODE_ENV } = process.env;

if(VUE_APP_GTM_ID) {
  Vue.use(VueGtm, {
    id: VUE_APP_GTM_ID, // Required parameter, will break your application if left undefined
    debug: NODE_ENV === 'development' // Automatically logs custom events in your development environment
    // enabled: !NODE_ENV === 'development' // You can uncomment this if you'd rather avoid mixing local events with a tag that's running on production
  });
}

if(VUE_APP_SENTRY_DSN && !NODE_ENV === 'development') {
  //Sentry - enable
  Sentry.init({
    Vue,
    dsn: VUE_APP_SENTRY_DSN,
    integrations: [
      new Integrations.BrowserTracing()
    ],
    tracesSampleRate: 1
  });
  
  //Sentry - Vue error capturing
  Vue.config.errorHandler = ((err, _, info) => {
    Sentry.setTag("info", info);
    Sentry.captureException(err);
    console.error(err);
  });
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
