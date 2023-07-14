// 封装请求方式 get、post、put
import AppAxios from './axios';

export default {
  // url?param1=xxx&param2=xxx
  get(url, params = {}) {
    return new Promise((resolve, reject) => {
      AppAxios.get(url, { params }).then((res) => {
        resolve(res);
      }, (error) => {
        reject(error);
      });
    });
  },

  post(url, params = {}) {
    return new Promise((resolve, reject) => {
      AppAxios.post(url, params).then((res) => {
        resolve(res);
      }, (error) => {
        reject(error);
      });
    });
  },
};
