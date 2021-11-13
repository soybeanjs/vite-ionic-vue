<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom" :tab="activeTab">
        <ion-tab-button v-for="tab in tabs" :key="tab.id" :tab="tab.route" :href="tab.route">
          <Icon :icon="tab.icon" class="text-48px" />
          <ion-label class="text-20px">{{ tab.label }}</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { IonPage, IonTabBar, IonTabButton, IonTabs, IonLabel, IonRouterOutlet } from '@ionic/vue';
import { Icon } from '@iconify/vue';
import { EnumRoutePath, EnumRouteTitle } from '@/enum';

interface Tab {
  id: number;
  label: EnumRouteTitle;
  route: EnumRoutePath;
  icon: string;
}

const route = useRoute();

const activeTab = computed(() => route.path);

const tabs: Tab[] = [
  {
    id: 0,
    label: EnumRouteTitle.search,
    route: EnumRoutePath.search,
    icon: 'mdi:home'
  },
  {
    id: 1,
    label: EnumRouteTitle.enterprise,
    route: EnumRoutePath.enterprise,
    icon: 'mdi:compare'
  },
  {
    id: 2,
    label: EnumRouteTitle.user,
    route: EnumRoutePath.user,
    icon: 'bx:bxs-user'
  }
];
</script>
<style scoped></style>
