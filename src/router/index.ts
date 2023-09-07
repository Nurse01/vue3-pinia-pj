import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductList from "../components/ProductList/ProductLayout.vue";
import ProductDetail from "../components/ProductList/ProductDetail.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/learning",
    name: "learning",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Learning.vue"),
  },
  {
    path:"/product",
    name:"product",
    component : ProductList,
  },
  {
    path:"/product/:id",
    name:"productDetail",
    component : ProductDetail,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
