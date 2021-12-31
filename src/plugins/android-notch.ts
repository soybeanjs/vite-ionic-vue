import { AndroidNotch } from '@awesome-cordova-plugins/android-notch';

/** 获取安卓刘海屏的高度，设置安全区顶部距离 */
export default function setupAndroidNotch() {
  AndroidNotch.getInsetTop().then(top => {
    // eslint-disable-next-line no-console
    console.log('top: ', top);
  });
}
