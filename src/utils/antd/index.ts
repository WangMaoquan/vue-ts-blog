import { InstallAntdVueComponentFunc } from '../../types';
import 'ant-design-vue/dist/antd.css';
import { Button, message, Row, Col, List } from 'ant-design-vue';
import { App } from 'vue';

const installAntdVueComponents: InstallAntdVueComponentFunc = (app: App) => {
  app.config.globalProperties.$message = message;
  app
    .use(Button)
    .use(List)
    .use(Row)
    .use(Col);
  return app;
};

export default installAntdVueComponents;
