import Vue from 'vue'
import VueRouter from 'vue-router'

//--------------------------- Backend component ---------------------------
import HomeContent from './components/Backend/Dashboard/HomeContent';
import About from './components/Backend/Dashboard/About';

//--------------------------- Frontend component ---------------------------
    import IndexContent from './components/Frontend/Main/IndexContent';
    // import About from './components/Backend/Dashboard/About';

Vue.use(VueRouter)

const routes = [

    //------------------------- Frontend Routes-------------
    {
        path: '/',
        component: IndexContent
    },
    // {
    //     path: '/',
    //     component: About
    // },

    //------------------------- Backend Routes-------------
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
