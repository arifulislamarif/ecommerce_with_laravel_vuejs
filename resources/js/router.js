import Vue from 'vue'
import VueRouter from 'vue-router'

//--------------------------- Backend component ---------------------------
// import Website from './components/Frontend/Main/WebsiteContent.vue'
import AdminContent from './components/Backend/Dashboard/AdminContent.vue';
import Category from './components/Backend/Category/Category.vue';

Vue.use(VueRouter)

const routes = [

    //------------------------- Backend Routes---------------------------------------------------
    {
        path: '/admin',
        component: AdminContent
    },
    {
        path: '/category',
        component: Category
    },
    // {
    //     path: '/',
    //     component: Website
    // },
]

export default new VueRouter({
    mode: 'history',
    routes
});
