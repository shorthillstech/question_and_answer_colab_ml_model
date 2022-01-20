import VueRouter from "vue-router";
import Vue from "vue";
import QNA from "./components/QNA.vue";
import Linkadd from "./components/Linkadd.vue";



Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: "/",
            name: "QNA",
            component: QNA
        },
        {
            path: "/linkadd",
            name: "linkadd",
            component: Linkadd
        }
    ],
    mode: "history"
});