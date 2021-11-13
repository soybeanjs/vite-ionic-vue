<template>
  <basic-layout :show-back-btn="false" fixed-class="bottom-0 right-0">
    <template #bg>
      <img :src="searchBanner" alt="" class="w-full h-auto" />
    </template>
    <router-link to="/search/detail">搜索详情</router-link>
    <div>
      <h3>node{{ nodeEnv }}</h3>
      <h3>http{{ httpEnv }}</h3>
      <h4 v-for="i in 100" :key="i">1234</h4>
    </div>
  </basic-layout>
</template>

<script setup lang="ts">
import { BasicLayout } from '@/layouts';
import { searchBanner } from '@/assets';

const nodeEnv = process.env.NODE_ENV;
const httpEnv = process.env.VUE_APP_HTTP_ENV;
</script>
<style scoped></style>
