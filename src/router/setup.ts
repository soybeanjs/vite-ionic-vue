import { createRouter, createWebHistory } from '@ionic/vue-router';
import type { App } from 'vue';
import { routes } from './routes';

export const router = createRouter({
  history: createWebHistory(),
  routes
});

export async function setupRouter(app: App) {
  app.use(router);
  // createRouterGuide(router);
  await router.isReady();
}
