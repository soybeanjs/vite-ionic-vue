<template>
  <ion-page>
    <ion-content :fullscreen="true" :force-overscroll="false">
      <ion-toolbar />
      <slot></slot>
      <template slot="fixed">
        <slot name="fixed"></slot>
      </template>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonPage, IonToolbar } from '@ionic/vue';
</script>
<style scoped></style>
