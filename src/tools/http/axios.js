/* eslint-disable no-param-reassign */
// 配置 axios 拦截器
import axios from 'axios';
import { Message, MessageBox } from 'element-ui';
import Utils from '../utils';
import Router from '../../router';

let pagePath = window.location.href.split('#')[0];
// 创建axios实例
const AppAxios = axios.create({
  baseURL: Utils.isDev() ? '/api' : `${pagePath}api`,
  timeout: 15000, // 超时
  // headers: {
  //   Accept: 'application/json',
  //   'Cache-Control': 'no-cache',
  //   'Content-Type': 'application/json;charset=UTF-8',

  //   // 接口必传请求头(这里是搬 之前那个pc端的请求头, 这个看这次要求)
  //   // channel: 'pc',
  //   // deviceInfor: 1,
  //   // 'X-Real-IP': 1,
  // },
});

// handle axios error
const axiosError = (error) => {
  // window.console.warn('axios response interceptor error：', error.response);
  let errorMsg = error.message == 'timeout of 15000ms exceeded' ? '请求超时，请稍后重试！' : error.message || '连接异常, 请稍后重试';

  // 根据响应码给予相应的错误提示
  if (error && error.response) {
    const errors = {
      400: '请求错误',
      401: '您的会话已过期，请重新登录',
      403: '您的访问权限受到限制，请联系管理员',
      404: '错误的参数或请求地址，请检查后重试',
      500: '服务器内部异常, 请稍后重试',
      502: '网关错误, 请稍后重试',
      503: '服务不可用',
      504: '网关超时',
      505: 'HTTP版本不受支持',
    };
    errorMsg = errors[error.response.status] || error.response.statusText || '未知错误';
  }

  // 401、403：重新登录
  if (error && error.response && [401, 403].includes(error.response.status)) {
    MessageBox.confirm(errorMsg, {
      type: 'warning',
      center: true,
      title: '温馨提示',
      showClose: false,
      confirmButtonText: '我知道了',
      showCancelButton: false,
      closeOnClickModal: false,
      closeOnPressEscape: false,
      distinguishCancelAndClose: true,
    })
    .then(() => {
      Router.replace('/');
    }).catch(() => {});
  } else {
    // 其他错误
    Message.error({
      message: errorMsg,
      center: true,
      showClose: true,
    });
  }
};

// request 拦截器
AppAxios.interceptors.request.use(config => {
  // window.console.warn('axios request interceptor params：', config);

  // 添加请求头token
  const token = Utils.getSession('token') || '';
  // if (token) config.headers.common.Authorization = `Bearer${token}`;
  if (token) config.headers.common.token = token;
  // 固定参数（projectId）
  // let projectId = Utils.getLocal('projectId') || '';
  // if(projectId) {
  //   let type = '';
  //   if(config.method === 'get') {
  //     type=config.params
  //   }else if(config.method === 'post') {
  //     if(JSON.stringify(config.data) == '{}') {
  //       config.params = {}
  //       type=config.params
  //     }else {
  //       type=config.data
  //     }
  //   }
  //   type=Object.assign(type, {
  //     pid: projectId,
  //   })
  // }
  return config;
}, error => {
  window.console.warn('axios request interceptor error：', error);
  return Promise.reject(error);
});

// response拦截器
AppAxios.interceptors.response.use(response => {
  // window.console.warn('axios response interceptor params：', response);

  // 响应成功, response.data：是由服务器提供的响应结构
  if (response.status === 200) return Promise.resolve(response.data);

  // 其他异常
  // axiosError(response);
  return Promise.reject(response);
}, error => {
  // 响应失败
  let showCommonError = true; // 默认使用统一错误处理
  // 隐藏统一错误处理，使用自定义错误处理(需在接口调用处的 catch 中执行 error.hideCommonError(); )
  error.hideCommonError = () => { showCommonError = false; };

  // 使用统一错误处理
  error.showCommonError = () => { showCommonError = true; };

  setTimeout(() => {
    if (showCommonError) axiosError(error);
  });
  return Promise.reject(error);
});

export default AppAxios;
