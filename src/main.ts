import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import { Button, message, Row, Col, List } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

// 引入样式
import './assets/css/detail.css';
import './assets/css/index.scss';
import './assets/iconfont/iconfont.css';
import './assets/iconfont2/iconfont.css';
import './assets/iconfont3/iconfont.css';
import './assets/iconfont4/iconfont.css';
import './assets/iconfont5/iconfont.css';




const app = createApp(App);
// 全局定义
app.config.globalProperties.$message = message;

app.use(Button);
app.use(Row);
app.use(Col);
app.use(List);
app
  .use(store)
  .use(router)
  .mount('#app');
