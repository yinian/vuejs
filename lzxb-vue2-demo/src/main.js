import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './config/routes'
import store from './store/'
import components from './components/'

import './css/common.css'
import './less/common.less'
/**
 * 在实际开发中， 我们有时需要知道对象的所有属性， 
 * 原生js给我们提供了一个很好的方法： Object.keys()， 
 * 该方法返回一个数组传入对象， 返回属性名
 */
Object.keys(components).forEach((key) => {
    var name = key.replace(/(\w)/, (v) => v.toUpperCase()) // 首字母大写
    Vue.component(`v${name}`, components[key])
})

Vue.use(VueRouter)

const router = new VueRouter({
    routes
})

router.beforeEach(({
    meta,
    path
}, from, next) => {
    var {
        auth = true
    } = meta
    var isLogin = Boolean(store.state.user.id)
    if (auth && !isLogin && path !== '/login') {
        return next({
            path: '/login'
        })
    }
    next()
})

new Vue({
    store,
    router
}).$mount('#app')