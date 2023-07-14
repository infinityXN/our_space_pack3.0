import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import ElementPlus from 'element-plus';
// 引入自定义样式
import './assets/styles/index.scss';
// 引入深色主题样式
import 'element-plus/theme-chalk/dark/css-vars.css';

import moment from 'moment';
import { ruleForm } from './tools/base/index'; // 引入基本工具

const app = createApp(App);
app.config.globalProperties.$moment = moment; // 全局使用moment
app.config.globalProperties.$ruleForm = ruleForm; // 全局使用输入框校验规则


app
  .use(store)
  .use(router)
  .use(ElementPlus)
  .mount('#app')
