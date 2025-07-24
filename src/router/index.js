import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/home.vue";
import About from "../components/About.vue";
import Contact from "../components/Contact.vue";

const routes = [

    {
        path: "/",
        name:"home",
        component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    }

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router