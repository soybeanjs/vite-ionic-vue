<template>
  <ion-page>
    <div class="absolute-lt">
      <slot name="bg"></slot>
    </div>
    <ion-header mode="ios">
      <ion-toolbar mode="ios" style="--border-width: 0" :style="bgColorVar">
        <div class="flex-y-center justify-between">
          <div v-show="!toolbarContentFull" class="w-120px">
            <ion-back-button v-if="showBackBtn" default-href="/" text="返回" />
          </div>
          <div class="flex-1-hidden flex-center">
            <slot name="toolbar">
              <h3 class="text-36px font-bold">{{ toolbarTitle }}</h3>
            </slot>
          </div>
          <div v-show="!toolbarContentFull" class="flex-center w-120px">
            <slot name="toolbar-extral"></slot>
          </div>
        </div>
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
import { IonContent, IonHeader, IonPage, IonToolbar, IonBackButton } from '@ionic/vue';

interface Props {
  /** 顶部工具栏标题 */
  toolbarTitle?: string;
  /** 是否显示返回按钮 */
  showBackBtn?: boolean;
  /** 固定元素的类名 */
  fixedClass?: string;
  /** toolbar内容占满100%宽 */
  toolbarContentFull?: boolean;
}

withDefaults(defineProps<Props>(), {
  toolbarTitle: '',
  showBackBtn: true,
  fixedClass: '',
  toolbarContentFull: false
});

const slots = useSlots();

const hasBgSlot = computed(() => Object.keys(slots).includes('bg'));

/** 透明背景用于设置沉浸状态栏的背景 */
const bgColorVar = computed(() => (hasBgSlot.value ? '--background: transparent' : ''));
</script>
<style scoped></style>
