import Vue from "vue";
import vueRouter from "vue-router";
Vue.use(vueRouter);
import face from "../components/face.vue";
import VueRouter from "vue-router";

const routes = [{
  path:"/",
  name:"face",
  component:face
}]

const router = new VueRouter({
  routes
})

export default router;