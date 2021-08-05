/*
 * @Author: zhanghui.chen
 * @Date: 2021-07-22 11:53:05
 * @LastEditTime: 2021-08-05 18:07:03
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
          "@btn-default-border": "transparent",

          // ghost 按钮【表格操作按钮】<Button ghost></Button>
          "@btn-default-ghost-color": "#A09EEA",
          "@btn-default-ghost-border": "#A09EEA",

          // danger 弹窗确定按钮
          "@btn-danger-bg": "#9493F5",

          // 下载模版button  原生button
          // <button type="button" className="download-btn">xxxx</button>

          // --
          // table
          "@table-bg": "transparent",
          "@table-header-bg": "transparent",
          "@table-row-hover-bg": "#202645",
          "@table-border-color": "transparent",
          "@table-header-color": "#A1ACBB",
          "@table-font-size": ".14rem",

          // pagination 分页
          "@pagination-item-bg": "#222948",

          // modal 弹窗
          "@modal-header-bg": "#1B1E2C",
          "@modal-content-bg": "#1B1E2C",
          "@modal-footer-bg": "#1B1E2C",
          "@modal-header-border-width": "0",
          "@modal-footer-border-width": "0",
          "@modal-footer-padding-vertical": ".24rem",
          "@modal-footer-padding-horizontal": ".24rem",
          "@modal-header-padding": ".24rem",

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
