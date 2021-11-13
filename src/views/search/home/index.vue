<template>
  <blank-layout>
    <div>
      <h3>node{{ nodeEnv }}</h3>
      <h3>http{{ httpEnv }}</h3>
      <h4>123</h4>
    </div>
  </blank-layout>
</template>

<script setup lang="ts">
import { BlankLayout } from '@/layouts';

const nodeEnv = process.env.NODE_ENV;
const httpEnv = process.env.VUE_APP_HTTP_ENV;
</script>
<style scoped></style>
