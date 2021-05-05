/*
包含了n个接口请求的函数的模块
函数返回值为: promise
 */

import ajax from './ajax';

// pull menu img
export const pullMenu = () => ajax('/MerchantPhoto/List?merchantId=718', {}, 'POST');
