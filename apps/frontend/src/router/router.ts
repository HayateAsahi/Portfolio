import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import MainLayout from "../components/templates/MainLayout.vue";


const routes: RouteRecordRaw[] = [
    {
        path: "/",
        component: MainLayout,
        children: [
            { path: "/", name: "home", component: () => import("../pages/HomeNews.vue") },
            { path: "/works", name: "works", component: () => import("../pages/Works.vue") },
            { path: "/about", name: "about", component: () => import("../pages/About.vue") },
            { path: "/contact", name: "contact", component: () => import("../pages/Contact.vue") },
            { path: "/works/:id", name: "workDetail", component: () => import("../pages/WorkDetail.vue"), props: true },
            { path: ":pathMatch(.*)*", name: "notFound", component: () => import("../pages/NotFoundPage.vue") },
        ]
    }
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to) {
    if (to.hash) return { el: to.hash, behavior: "smooth" };
    return { top: 0 };
    },
});
