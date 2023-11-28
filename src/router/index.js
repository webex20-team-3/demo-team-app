import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import Memo from "../views/MemoApp.vue"
import Palette from "../views/PaletteApp.vue"
import Quiz from "../views/QuizApp.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/Memo",
    name: "Memo",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Memo,
  },
  {
    path: "/Quiz",
    name: "Quiz",
    component: Quiz,
  },
  {
    path: "/Palette",
    name: "Palette",
    component: Palette,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
