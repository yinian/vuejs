import axios from 'axios';
import {
    Message,
    Loading
} from 'element-ui';
import router from './router';

let loading; //定义loading变量

function startLoading() { //使用Element loading-start 方法
    loading = Loading.service({
        lock: true,
        text: '拼命加载中',
        background: 'rgba(0, 0, 0, 0.7)'
    })
}

function endLoading() { //使用Element loading-close 方法
    loading.close()
}

// 请求拦截

//响应拦截



export default axios;