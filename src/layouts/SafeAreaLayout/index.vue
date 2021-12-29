<template>
  <ion-page>
    <ion-content :force-overscroll="false" :fullscreen="true">
      <div class="content-wrapper relative h-full">
        <slot></slot>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
</script>
<style scoped>
.content-wrapper {
  padding-top: var(--ion-safe-area-top);
  padding-left: var(--ion-safe-area-left);
  padding-right: var(--ion-safe-area-right);
  padding-bottom: var(--ion-safe-area-bottom);
}
</style>
