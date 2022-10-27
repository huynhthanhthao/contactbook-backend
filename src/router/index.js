import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home/Home";
import ContactCreate from "../components/ContactCreate/ContactCreate.vue";
import ContactUpdate from "../components/ContactUpdate/ContactUpdate.vue";
import Error from "../components/Error.vue";
const routes = [
    { path: "/", component: Home },
    { path: "/:pathMatch(.*)*", component: Error },
    { path: "/create", component: ContactCreate },
    { path: "/update", component: ContactUpdate },
];

const router = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
});

export default router;
