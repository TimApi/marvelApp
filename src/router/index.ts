import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ComicsView from "../views/ComicsView.vue";
import CharactersView from "../views/CharactersView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/comics",
      name: "comic",
      component: ComicsView,
    },
    {
      path: "/characters",
      name: "characters",
      component: CharactersView,
    },
  ],
});

export default router;
