import { StatusBar, Style } from '@capacitor/status-bar';
import { canSetupNativePlugin } from '@/utils';

export default function useStatusBar() {
  const canSetupPlugin = canSetupNativePlugin();

  /** 初始化状态栏样式 */
  function initStatusBar() {
    if (!canSetupPlugin) return;
    StatusBar.setStyle({ style: Style.Light });
    StatusBar.setBackgroundColor({ color: '#ffffff' });
  }

  /** 沉浸状态栏 */
  function overlayStatusBar() {
    if (!canSetupPlugin) return;
    StatusBar.setStyle({ style: Style.Light });
    StatusBar.setOverlaysWebView({ overlay: true });
  }

  /** 取消沉浸状态栏 */
  function cancelOverlayStatusBar() {
    if (!canSetupPlugin) return;
    StatusBar.setBackgroundColor({ color: '#ffffff' });
    StatusBar.setOverlaysWebView({ overlay: false });
  }

  return {
    initStatusBar,
    overlayStatusBar,
    cancelOverlayStatusBar
  };
}
