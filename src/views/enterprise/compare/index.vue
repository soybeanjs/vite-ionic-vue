<template>
  <basic-layout :show-back-btn="false" :toolbar-title="EnumRouteTitle.enterprise">
    <div>
      <h3>企业对比</h3>
    </div>
  </basic-layout>
</template>

<script setup lang="ts">
import { EnumRouteTitle } from '@/enum';
import { BasicLayout } from '@/layouts';
</script>
<style scoped></style>
