/*
 * @Author: zhanghui.chen
 * @Date: 2021-07-22 11:53:05
 * @LastEditTime: 2021-08-04 16:49:24
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
          // primary 按钮
          "@btn-primary-bg": "linear-gradient(135deg, #79CAF3, #978CF5)",
          // default 按钮【下载.导出】<Button><Button>
          "@btn-default-color": "#A09EEA",
          "@btn-default-bg": "rgba(160, 158, 234, 0.1)",
          "@btn-default-border": "rgba(160, 158, 234, 0)",

          // danger ghost 按钮【表格操作按钮】<Button danger ghost></Button>
          "@btn-danger-color": "#A09EEA",
          "@btn-danger-border": "#A09EEA",
          // --
          // table
          "@table-bg": "rgba(0,0,0,0)",
          "@table-header-bg": "rgba(0,0,0,0)",
          "@table-row-hover-bg": "#202645",
          "@table-border-color": "rgba(0,0,0,0)",
          "@table-header-color": "#A1ACBB",
          "@table-font-size": ".14rem",

          // pagination 分页
          "@pagination-item-bg": "#222948",

          // --
          "@input-bg": "#222948",
          "@input-border-color": "#222948",
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
          "@component-background": "#181c32",
          "@picker-date-hover-range-color": "rgba(151,140,245,.2)",
          "@picker-bg": "#222948",
          "@picker-basic-cell-disabled-bg": "rgba(211,211,211,.1)",
          "@label-color": "#8A8E9D",
        },
      },
    },
  ],
};
