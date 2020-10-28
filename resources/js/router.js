import Vue from 'vue'
import VueRouter from 'vue-router'

//--------------------------- Backend component ---------------------------

import HomeContent from './components/Backend/Dashboard/HomeContent';
import About from './components/Backend/Dashboard/About';

Vue.use(VueRouter)

const routes = [

    //------------------------- Backend Routes---------------------------------------------------
    {
        path: '/',
        component: HomeContent
    },
    {
        path: '/about',
        component: About
    },
]


export default new VueRouter({ routes })
