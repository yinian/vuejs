import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Register from './views/Register.vue'
import Login from './views/Login.vue'
import Home from './views/Home'
import Nofind from './views/404.vue'
import InfoShow from './views/InfoShow'
import FundList from './views/FundList'

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '*',
            name: '/404',
            component: Nofind
        },
        {
            path: '/',
            redirect: '/index'
        },
        {
            path: '/index',
            name: 'index',
            component: Index,
            children: [{
                path: '',
                component: Home
            }, {
                path: '/home',
                name: 'home',
                component: Home
            }, {
                path: '/infoshow',
                name: 'infoshow',
                component: InfoShow
            }, {
                path: '/fundList',
                name: 'fundList',
                component: FundList
            }]
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },

    ]
});

// 添加路由守卫
router.beforeEach((to, from, next) => {
    const isLogin = localStorage.eleToken ? true : false;
    if (to.path == "/login" || to.path == "/register") {
        next();
    } else {
        isLogin ? next() : next("/login");
    }
});

export default router;