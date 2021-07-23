/*
 * @Author: zhanghui.chen
 * @Date: 2021-07-22 11:53:05
 * @LastEditTime: 2021-07-23 18:00:58
 * @LastEditors: zhanghui.chen
 */
const CracoAntDesignPlugin = require("craco-antd");

module.exports = {
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeTheme: {
          "@primary-color": "#978CF5",
          "@btn-primary-bg": "linear-gradient(135deg, #79CAF3, #978CF5)",
          "@input-bg": "#0F3265",
          "@input-border-color": "#0F3265",
          "@input-color": "#fff",
          "@input-hover-border-color": "rgba(151,140,245,.6)",
          "@layout-body-background": "#181c32",
          "@layout-header-background": "#1E233F",
          "@menu-dark-bg": "#1E233F",
          "@menu-dark-item-active-bg": "#191F3A",
          "@layout-header-padding": "0 25px",
          "@select-border-color": "#222948",
          "@select-background": "#222948",
          "@select-dropdown-bg": "#222948",
          "@select-item-selected-bg": "#191F3A",
          "@avatar-bg": "#222948",
          "@dropdown-menu-bg": "#191F3A",
          "@menu-dark-item-hover-bg": "rgba(255,255,255,.08)",
        },
      },
    },
  ],
};
