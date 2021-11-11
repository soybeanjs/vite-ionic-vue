import { createApp } from 'vue';
import { setupIonic, setupAssets } from './plugins';
import { setupRouter } from './router';
import App from './App.vue';

async function setupApp() {
  const app = createApp(App);

  // 引入静态资源依赖(js,css)
  setupAssets();

  // 挂载ionic框架
  setupIonic(app);

  // 挂载路由
  await setupRouter(app);

  // 路由准备就绪后挂载APP实例
  app.mount('#app');
}

setupApp();
