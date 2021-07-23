/*
 * @Author: zhanghui.chen
 * @Date: 2021-07-22 10:41:31
 * @LastEditTime: 2021-07-23 16:58:50
 * @LastEditors: zhanghui.chen
 */
import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { remJs } from "utils/index";
import App from "./App";
import "antd/dist/antd.dark.less";
import "assets/fonts/iconfont.css";
import "assets/style/transition.less";
import "assets/style/cover.less";
import "assets/style/common.less";
import { BrowserRouter } from "react-router-dom";
remJs(1920);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
