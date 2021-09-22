import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/Home.vue';
import GettingStarted from '@/views/GettingStarted.vue';
import RouterExample from '@/views/RouterExample.vue';
import StoreExample from '@/views/StoreExample.vue';
import GtmExample from '@/views/GtmExample.vue';
import TranslationExample from '@/views/TranslationExample.vue';

import WebXR from '@/views/WebXR';
import Banuba from '@/views/Banuba.vue';
import WebXRThree from '@/views/WebXRThreejs.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/getting-started',
    name: 'GettingStarted',
    component: GettingStarted
  },
  {
    path: '/router',
    name: 'RouterExample',
    component: RouterExample
  },
  {
    path: '/router/:parameter',
    name: 'RouterParameterExample',
    component: RouterExample
  },
  {
    path: '/vuex-store',
    name: 'StoreExample',
    component: StoreExample
  },
  {
    path: '/vue-tagmanager',
    name: 'GtmExample',
    component: GtmExample
  },
  {
    path: '/translations',
    name: 'TranslationExample',
    component: TranslationExample
  },
  {
    path: '/webxr',
    name: 'WebXR',
    component: WebXR
  },
  {
    path: '/threejs',
    name: 'WebXRThree',
    component: WebXRThree
  },
  {
    path: '/banuba',
    name: 'Banuba',
    component: Banuba
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
