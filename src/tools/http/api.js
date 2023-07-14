// 所有接口
import Http from './http';
import qs from 'qs';

export default {
  // ---------------- 登录 -----------------
  // 登录获取token
  login(params) {
    const list = qs.stringify(params);
    return Http.post(`/tl-user/login?${list}`);
  },
  // ---------------- 登录 -----------------
};