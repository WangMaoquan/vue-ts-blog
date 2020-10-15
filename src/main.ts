import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import installAntdVueComponents from './utils/antd';


// 引入样式
import './assets/css/detail.css';
import './assets/css/index.scss';
import './assets/iconfont/iconfont.css';
const app = createApp(App);


installAntdVueComponents(app)
  .use(store)
  .use(router)
  .mount('#app');
