import Vue from 'vue'
import VueRouter from 'vue-router'

//--------------------------- Backend component ---------------------------
// import Website from './components/Frontend/Main/WebsiteContent.vue'
import AdminContent from './components/Backend/Dashboard/AdminContent.vue';
import Category from './components/Backend/Category/Category.vue';
import SubCategory from './components/Backend/SubCategory/SubCategory';

Vue.use(VueRouter)

const routes = [

    //------------------------- Backend Routes---------------------------------------------------
    {
        path: '/home',
        component: AdminContent
    },
    {
        path: '/category',
        component: Category
    },
    {
        path: '/subcategory',
        component: SubCategory
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
