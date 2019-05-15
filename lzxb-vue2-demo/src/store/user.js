import Vue from 'vue'

export const USER_SIGNIN = 'USER_SIGNIN' // 登录成功
export const USER_SIGNOUT = 'USER_SIGNOUT' // 退出登录

export default {
    // 使用HTML5可以在本地存储用户的浏览数据,
    //sessionStorage: 针对一个 session 的数据存储（关闭窗口，存储的数据清空）
    state: JSON.parse(sessionStorage.getItem('user')) || {},
    mutations: {
        [USER_SIGNIN](state, user) {
            sessionStorage.setItem('user', JSON.stringify(user))
                // Object.assign() 方法用于将所有可枚举属性的值
                // 从一个或多个源对象复制到目标对象。它将返回目标对象。
            Object.assign(state, user)
        },
        [USER_SIGNOUT](state) {
            sessionStorage.removeItem('user')
            Object.keys(state).forEach(k => Vue.delete(state, k))
        }
    },
    actions: {
        [USER_SIGNIN]({
            commit
        }, user) {
            commit(USER_SIGNIN, user)
        },
        [USER_SIGNOUT]({
            commit
        }) {
            commit(USER_SIGNOUT)
        }
    }

}