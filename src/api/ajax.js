/**
 * 能发送ajax请求的函数模块
 * 函数的返回值是promise对象
 */
import axios from 'axios';
import { API_PROXY_DEV, API_PROXY_PROD } from '../config';

const proxy = process.env.NODE_ENV === 'development' ? API_PROXY_DEV : API_PROXY_PROD;
const baseUrl = proxy.host + (proxy.port && `:${proxy.port}`);
axios.defaults.headers = { 'Content-type': 'application/x-www-form-urlencoded' };
axios.defaults.baseURL = baseUrl;

export default function ajax(url, data = {}, type = 'GET') {
    if (type === 'GET') {
        // 发送GET请求
        // 拼请求参数串
        // data: {username: tom, password: 123}
        // paramStr: username=tom&password=123
        let paramStr = '';
        Object.keys(data).forEach((key) => {
            paramStr += key + '=' + data[key] + '&';
        });
        if (paramStr) {
            paramStr = paramStr.substring(0, paramStr.length - 1);
        }
        // 使用axios发get请求
        return axios.get(url + '?' + paramStr);
    }

    if (type === 'POST') {
        // 发送POST请求
        // 使用axios发post请求
        return axios.post(url, data);
    }
}
