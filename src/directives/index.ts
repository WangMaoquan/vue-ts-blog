import { InstallDirectivesFunc } from '@/types';
import { App } from 'vue';

export const installDirectives: InstallDirectivesFunc = (app: App) => {
  app.directive('topath', {});
  return app;
};
