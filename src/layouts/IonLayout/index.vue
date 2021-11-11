<template>
  <ion-page>
    <ion-header mode="ios">
      <ion-toolbar style="--border-width: 0">
        <ion-back-button slot="start" default-href="/" />
        <ion-title>{{ toolBarTitle }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <slot></slot>
      <template slot="fixed">
        <slot name="fixed"></slot>
      </template>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonToolbar, IonBackButton, IonTitle } from '@ionic/vue';

interface Props {
  /** 顶部工具栏标题 */
  toolBarTitle: string;
}

defineProps<Props>();
</script>
<style scoped></style>
