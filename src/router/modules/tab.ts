import type { CustomRoute } from '@/interface';
import { EnumRoutePath, EnumRouteTitle } from '@/enum';
import { TabLayout } from '@/layouts';
import { ROUTE_NAME_MAP } from '@/utils';

const TAB: CustomRoute = {
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
};

export default TAB;
