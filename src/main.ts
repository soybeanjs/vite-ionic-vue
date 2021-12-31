import { createApp } from 'vue';
import { setupIonic, setupAssets, setupScreenOrientation, setupStatusBar, setupAndroidNotch } from './plugins';
import { setupRouter } from './router';
import App from './App.vue';

function setupPlugins() {
  // 引入静态资源依赖(js,css)
  setupAssets();

  // 禁用横屏
  setupScreenOrientation();

  // 状态栏沉浸
  setupStatusBar();

  // 安卓安全区距离
  setupAndroidNotch();
}

async function setupApp() {
  const app = createApp(App);

  // 挂载ionic框架
  setupIonic(app);

  // 挂载路由
  await setupRouter(app);

  // 路由准备就绪后挂载APP实例
  app.mount('#app');
}

setupPlugins();
setupApp();
