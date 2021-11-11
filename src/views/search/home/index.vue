<template>
  <blank-layout>
    <p class="inline-block whitespace-nowrap">
      <span v-for="i in 100" :key="i">{{ i }}</span>
    </p>
  </blank-layout>
</template>

<script setup lang="ts">
import { BlankLayout } from '@/layouts';
</script>
<style scoped></style>
