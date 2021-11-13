<template>
  <basic-layout :show-back-btn="false" :toolbar-title="EnumRouteTitle.enterprise">
    <template #toolbar-extral>
      <span class="text-24px">编辑</span>
    </template>
    <div></div>
  </basic-layout>
</template>

<script setup lang="ts">
import { EnumRouteTitle } from '@/enum';
import { BasicLayout } from '@/layouts';
</script>
<style scoped></style>
