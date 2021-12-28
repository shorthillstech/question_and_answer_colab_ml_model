import VueRouter from "vue-router";
import Vue from "vue";
import Akbar from "./components/Akbar.vue";
import Linkadd from "./components/Linkadd.vue";



Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: "/",
            name: "Akbar",
            component: Akbar
        },
        {
            path: "/linkadd",
            name: "linkadd",
            component: Linkadd
        }
    ],
    mode: "history"
});