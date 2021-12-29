<template>
  <basic-layout :show-back-btn="false" :toolbar-content-full="true">
    <template #bg>
      <img :src="userBanner" alt="" class="w-full h-auto" />
    </template>
    <template #toolbar>
      <div class="flex-y-center w-full px-32px pt-24px py-36px">
        <div class="flex-center w-120px h-120px bg-white rounded-full">
          <Icon icon="carbon:user-avatar-filled" class="text-120px text-[#afafaf]" />
        </div>
        <div class="flex-1"></div>
        <Icon icon="icon-park-outline:setting-one" class="text-48px text-white" @click="toSettings" />
      </div>
    </template>
    <div class="px-32px">
      <action-card />
    </div>
  </basic-layout>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { Icon } from '@iconify/vue';
import { BasicLayout } from '@/layouts';
import { userBanner } from '@/assets';
import { ActionCard } from './components';

const router = useRouter();

function toSettings() {
  router.push('/user/settings');
}
</script>
<style scoped></style>
