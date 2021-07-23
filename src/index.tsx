/*
 * @Author: zhanghui.chen
 * @Date: 2021-07-22 10:41:31
 * @LastEditTime: 2021-07-23 12:04:56
 * @LastEditors: zhanghui.chen
 */
import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { remJs } from "utils/index";
import App from "./App";
import "antd/dist/antd.dark.less";
import "assets/fonts/iconfont.css";
remJs(1920);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
