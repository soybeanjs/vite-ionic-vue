<template>
  <basic-layout tool-bar-title="搜索详情">
    <p v-for="i in 100" :key="i">{{ i }}</p>
  </basic-layout>
</template>

<script setup lang="ts">
import { BasicLayout } from '@/layouts';
</script>
<style scoped></style>
