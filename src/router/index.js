import { createWebHistory, createRouter } from "vue-router"
import Home from "@/views/Home"
import Contact from "@/views/Contact"
import About from "@/views/About"
import Produk from "@/views/Produk"
import Detail from "@/views/Detail"

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
    {
        path: "/produk",
        name: "Produk",
        component: Produk,
    },
    {
        path: "/detail/:id_produk",
        name: "Detail",
        component: Detail,
        props: true,
    },
];

const router = createRouter({
    history : createWebHistory(),
    routes,
});

export default router;