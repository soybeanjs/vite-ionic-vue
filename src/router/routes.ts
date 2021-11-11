import type { RouteRecordRaw } from 'vue-router';
import type { CustomRoute } from '@/interface';
import { EnumRoutePath, EnumRouteTitle } from '@/enum';
import { TabLayout } from '@/layouts';
import { ROUTE_NAME_MAP } from '@/utils';

const customRoutes: CustomRoute[] = [
  {
    name: ROUTE_NAME_MAP.get('root'),
    path: EnumRoutePath.root,
    component: TabLayout,
    redirect: { name: ROUTE_NAME_MAP.get('search') },
    meta: {
      title: EnumRouteTitle.root
    },
    children: [
      {
        name: ROUTE_NAME_MAP.get('search'),
        path: EnumRoutePath.search,
        component: () => import('@/views/search/home/index.vue'),
        meta: {
          title: EnumRouteTitle.search
        }
      },
      {
        name: ROUTE_NAME_MAP.get('enterprise'),
        path: EnumRoutePath.enterprise,
        component: () => import('@/views/enterprise/compare/index.vue'),
        meta: {
          title: EnumRouteTitle.enterprise
        }
      },
      {
        name: ROUTE_NAME_MAP.get('user'),
        path: EnumRoutePath.user,
        component: () => import('@/views/user/home/index.vue'),
        meta: {
          title: EnumRouteTitle.user
        }
      }
    ]
  },
  {
    name: ROUTE_NAME_MAP.get('search_detail'),
    path: EnumRoutePath.search_detail,
    component: () => import('@/views/search/detail/index.vue'),
    meta: {
      title: EnumRouteTitle.search
    }
  }
];

/** 所有路由 */
export const routes: RouteRecordRaw[] = [...customRoutes];
