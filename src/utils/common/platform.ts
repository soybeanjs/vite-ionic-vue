import { getPlatforms } from '@ionic/vue';

export function canSetupNativePlugin() {
  const platforms = getPlatforms();
  const canSetupPlugin = !platforms.includes('mobileweb') && !platforms.includes('desktop');
  return canSetupPlugin;
}
