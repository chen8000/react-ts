/*
 * @Author: zhanghui.chen
 * @Date: 2021-07-22 11:53:05
 * @LastEditTime: 2021-07-22 18:11:43
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
        },
      },
    },
  ],
};
