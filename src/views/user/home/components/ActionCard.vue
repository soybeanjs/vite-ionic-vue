<template>
  <div class="action-card flex-y-center justify-between w-686px h-155px px-74px bg-white rounded-12px">
    <div v-for="item in actions" :key="item.label" class="flex-col-center" @click="handleRouter(item.route)">
      <Icon :icon="item.icon" class="text-48px text-[#666]" />
      <h3 class="pt-24px text-24px text-[#333]">{{ item.label }}</h3>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { Icon } from '@iconify/vue';
import { EnumRoutePath } from '@/enum';

interface ActionCard {
  id: number;
  label: string;
  route: EnumRoutePath;
  icon: string;
}

const router = useRouter();

const actions: ActionCard[] = [
  { id: 0, label: '关注', route: EnumRoutePath.user_focus, icon: 'ri:star-smile-line' },
  { id: 1, label: '报告', route: EnumRoutePath.user_report, icon: 'iconoir:stats-report' },
  { id: 2, label: '订单', route: EnumRoutePath.user_order, icon: 'icon-park-outline:transaction-order' },
  { id: 3, label: '消息', route: EnumRoutePath.user_notification, icon: 'mdi:message-text-outline' }
];

function handleRouter(route: EnumRoutePath) {
  router.push(route);
}
</script>
<style scoped>
.action-card {
  box-shadow: 0px 2px 5px 0px #d2d2d2;
}
</style>
