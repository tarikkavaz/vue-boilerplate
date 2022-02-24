import { createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Products from "../views/Products.vue";
import ProductDetail from "../views/ProductDetail.vue";
import Users from "../views/Users.vue";
import UserDetail from "../views/UserDetail.vue";
import Video from "../views/Video.vue";
import NotFound from "../views/NotFound.vue";
import translations from "../lang/translations";
import localizedURLs from "../lang/localized-urls";
import { createLangRouter } from "vue-lang-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: "/video",
    name: "Video",
    component: Video,
  },
  {
    path: "/products",
    name: "Products",
    component: Products,
  },
  {
    path: "/product/:id",
    name: "ProductDetail",
    component: ProductDetail,
    params: true,
  },
  {
    path: "/users",
    name: "Users",
    component: Users,
  },
  {
    path: "/users/:id",
    name: "UserDetail",
    component: UserDetail,
    params: true,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const langRouterOptions = {
  defaultLanguage: "en",
  translations,
  localizedURLs,
};
const routerOptions = {
  history: createWebHistory(process.env.BASE_URL),
  routes,
};
const router = createLangRouter(langRouterOptions, routerOptions);

export default router;
