<template>
  <basic-layout :show-back-btn="false" :toolbar-content-full="true">
    <template #bg>
      <img :src="searchBanner" alt="" class="w-full h-auto" />
    </template>
    <template #toolbar>
      <div class="flex-center pt-18px pb-24px">
        <img class="w-75px h-70px" :src="logoWhite" alt="" />
        <img class="w-453px h-52px ml-16px" :src="searchBannerTitle" alt="" />
      </div>
    </template>
    <div class="px-32px">
      <header class="flex-y-center h-98px px-24px bg-white text-30px text-[#999] rounded-10px" @click="toSearchDetail">
        <Icon icon="ic:round-search" class="text-40px" />
        <span class="pl-18px">输入公司名称关键字</span>
      </header>
    </div>
  </basic-layout>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { BasicLayout } from '@/layouts';
import { useRouterChange } from '@/hooks';
import { searchBanner, logoWhite, searchBannerTitle } from '@/assets';

const { toSearchDetail } = useRouterChange();
</script>
<style scoped></style>
