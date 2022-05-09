import Vue from "vue";
import vueRouter from "vue-router";
Vue.use(vueRouter);
import face from "../components/face.vue";
import barChart from "../components/csv/barChart.vue"
import he from "../components/HelloWorld.vue"
import VueRouter from "vue-router";
import date from "../components/date.vue"
import chart from "../components/chart.vue";
import tree from "../components/tree.vue";
import table from "../components/table.vue";

const routes = [{
    path: "/",
    name: "face",
    component: face
  },
  {
    path: "/date",
    name: "date",
    component: date
  },
  {
    path: "/barChart",
    name: "barchart",
    component: barChart
  },
  {
    path: "/he",
    name: "he",
    component: he
  },
  {
    path: "/chart",
    name: "chart",
    component: chart
  },
  {
    path: "/tree",
    name: "tree",
    component: tree
  },
  {
    path:"/table",
    name:"table",
    component:table
  }
]

const router = new VueRouter({
  routes
})

export default router;