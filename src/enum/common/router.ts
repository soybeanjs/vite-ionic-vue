export enum EnumRoutePath {
  'root' = '/',
  'login' = '/login',
  'not-found' = '/404',
  'no-permission' = '/403',
  'service-error' = '/500',
  // 自定义路由
  // 1.首页三个tab页面
  'search' = '/search',
  'enterprise' = '/enterprise',
  'user' = '/user',
  // 2.搜索详情
  'search_detail' = '/search/detail',
  // 3.企业相关页面
  'enterprise_detail' = '/enterprise/detail',
  'enterprise_report' = '/enterprise/report',
  // 4.用户中心页面
  'user-member' = '/user-member',
  'user_focus' = '/user/focus',
  'user_report' = '/user/report',
  'user_order' = '/user/order',
  'user_notification' = '/user/notification',
  'user_help' = '/user/help',
  'user_dictionary' = '/user/dictionary',
  'user_feedback' = '/user/feedback',
  // 5.用户设置
  'user_settings' = '/user/settings',
  'user_settings-edit' = '/user/settings-edit',
  'user_settings-edit-avatar' = '/user/settings-edit-avatar',
  'user_settings-security' = '/user/settings-security',
  'user_settings-security-pwd' = '/user/settings-security-pwd',
  'user_settings-security-logout' = '/user/settings-security-logout',
  'user_settings-protocol' = '/user/settings-protocol',
  'user_settings-policy' = '/user/settings-policy',
  'user_settings-about' = '/user/settings-about',
  'user_member-policy' = '/user/member-policy'
}

export enum EnumRouteTitle {
  'root' = 'root',
  'login' = '登录',
  'not-found' = '未找到',
  'no-permission' = '无权限',
  'service-error' = '服务器错误',
  // 自定义路由
  'search' = '搜索',
  'search_detail' = '搜索结果页',
  'enterprise' = '企业对比',
  'enterprise_detail' = '企业详情',
  'enterprise_report' = '企业报告',
  'user' = '用户中心',
  'user-member' = '会员中心',
  'user_focus' = '关注',
  'user_report' = '报告',
  'user_order' = '订单',
  'user_notification' = '消息通知',
  'user_help' = '帮助中心',
  'user_dictionary' = '数据字典',
  'user_feedback' = '意见反馈',
  'user_settings' = '设置',
  'user_settings-edit' = '编辑资料',
  'user_settings-edit-avatar' = '用户头像',
  'user_settings-security' = '账户安全',
  'user_settings-security-pwd' = '设置密码',
  'user_settings-security-logout' = '注销账号',
  'user_settings-protocol' = '用户协议',
  'user_settings-policy' = '隐私权政策',
  'user_settings-about' = '关于我们'
}

/** 登录模块 */
export enum EnumLoginModule {
  'pwd-login' = '账密登录',
  'code-login' = '手机验证码登录',
  'register' = '注册',
  'reset-pwd' = '重置密码',
  'bind-wechat' = '微信绑定'
}
