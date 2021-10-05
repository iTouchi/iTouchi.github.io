import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/views/Home.vue";
import GettingStarted from "@/views/GettingStarted.vue";
import RouterExample from "@/views/RouterExample.vue";
import StoreExample from "@/views/StoreExample.vue";
import GtmExample from "@/views/GtmExample.vue";
import TranslationExample from "@/views/TranslationExample.vue";

import WebXR from "@/views/WebXR";
import WebXRThree from "@/views/WebXRThreejs.vue";
import Banuba from "@/views/Banuba.vue";
import ARjs from "@/views/ARjs";
import Wall from "@/views/8thwall";
import Zapworks from "@/views/Zapworks";
import WebARkit from "@/views/WebARkit";
import Unity from "@/views/Unity";
import ARCore from "@/views/ARCore"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/getting-started",
    name: "GettingStarted",
    component: GettingStarted,
  },
  {
    path: "/router",
    name: "RouterExample",
    component: RouterExample,
  },
  {
    path: "/router/:parameter",
    name: "RouterParameterExample",
    component: RouterExample,
  },
  {
    path: "/vuex-store",
    name: "StoreExample",
    component: StoreExample,
  },
  {
    path: "/vue-tagmanager",
    name: "GtmExample",
    component: GtmExample,
  },
  {
    path: "/translations",
    name: "TranslationExample",
    component: TranslationExample,
  },
  {
    path: "/webxr",
    name: "WebXR",
    component: WebXR,
  },
  {
    path: "/threejs",
    name: "WebXRThree",
    component: WebXRThree,
  },
  {
    path: "/banuba",
    name: "Banuba",
    component: Banuba,
  },
  {
    path: "/arjs",
    name: "ARjs",
    component: ARjs,
  },
  {
    path: "/8thwall",
    name: "8thWall",
    component: Wall,
  },
  {
    path: "/zapworks",
    name: "zapworks",
    component: Zapworks,
  },
  {
    path: "/webarkit",
    name: "webarkit",
    component: WebARkit,
  },
  {
    path: "/unity",
    name: "unity",
    component: Unity,
  },
  {
    path: "/arcore",
    name: "arcore",
    component: ARCore,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
