<template>
  <basic-layout :show-back-btn="false">
    <template #bg>
      <div>这是头部的背景</div>
    </template>
    <h3>user</h3>
  </basic-layout>
</template>

<script setup lang="ts">
import { BasicLayout } from '@/layouts';
</script>
<style scoped></style>
