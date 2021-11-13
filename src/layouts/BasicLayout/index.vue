<template>
  <ion-page>
    <div class="absolute-lt">
      <slot name="bg"></slot>
    </div>
    <ion-header mode="ios">
      <ion-toolbar style="--border-width: 0" :style="bgColorVar">
        <slot slot="start" name="start">
          <ion-back-button v-if="showBackBtn" slot="start" default-href="/" text="" style="--color: #666" />
        </slot>
        <slot slot="secondary" name="secondary"></slot>
        <slot name="toolbar">
          <ion-title>{{ toolbarTitle }}</ion-title>
        </slot>
        <slot slot="primary" name="primary"></slot>
        <slot slot="end" name="end"></slot>
      </ion-toolbar>
    </ion-header>
    <ion-content :force-overscroll="false" :style="bgColorVar">
      <slot></slot>
      <div slot="fixed" :class="fixedClass">
        <slot name="fixed"></slot>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { useSlots, computed } from 'vue';
import { IonContent, IonHeader, IonPage, IonToolbar, IonBackButton, IonTitle } from '@ionic/vue';

interface Props {
  /** 顶部工具栏标题 */
  toolbarTitle?: string;
  /** 是否显示返回按钮 */
  showBackBtn?: boolean;
  /** 固定元素的类名 */
  fixedClass?: string;
}

withDefaults(defineProps<Props>(), {
  toolbarTitle: '',
  showBackBtn: true,
  fixedClass: ''
});

const slots = useSlots();

const hasBgSlot = computed(() => Object.keys(slots).includes('bg'));

/** 透明背景用于设置沉浸状态栏的背景 */
const bgColorVar = computed(() => (hasBgSlot.value ? '--background: transparent' : ''));
</script>
<style scoped></style>
