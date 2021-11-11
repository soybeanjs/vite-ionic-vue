import type { RouteRecordRaw } from 'vue-router';
import { EnumRoutePath } from '@/enum';

/** 路由描述 */
interface RouteMeta {
  /** 路由名称 */
  title?: string;
  /** 去除状态栏 */
  removeStatusBar?: boolean;
}

/** 路由配置 */
export type CustomRoute = RouteRecordRaw & { meta: RouteMeta };

/** 路由路径 */
export type RoutePathKey = keyof typeof EnumRoutePath;
