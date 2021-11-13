import { getPlatforms } from '@ionic/vue';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

/** 禁用横屏 */
export default function setupScreenOrientation() {
  const platforms = getPlatforms();
  const canSetupPlugin = !platforms.includes('mobileweb') && !platforms.includes('desktop');
  if (canSetupPlugin) {
    ScreenOrientation.lock(ScreenOrientation.ORIENTATIONS.PORTRAIT);
  }
}
