import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { canSetupNativePlugin } from '@/utils';

/** 禁用横屏 */
export default function setupScreenOrientation() {
  const canSetupPlugin = canSetupNativePlugin();
  if (canSetupPlugin) {
    ScreenOrientation.lock(ScreenOrientation.ORIENTATIONS.PORTRAIT);
  }
}
