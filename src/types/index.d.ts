import { App } from 'vue';

// 注册 antd-vue 的组件
type InstallAntdVueComponentFunc = (app: App) => App;

type toPathFunc = (pathName: string) => void;

type InstallDirectivesFunc = (app: App) => App;

export { InstallAntdVueComponentFunc, toPathFunc, InstallDirectivesFunc };
