/*
 * @Author: zhanghui.chen
 * @Date: 2021-07-22 10:41:31
 * @LastEditTime: 2021-08-05 14:31:38
 * @LastEditors: zhanghui.chen
 */
import App from "./App";
import "antd/dist/antd.dark.less";
import "assets/fonts/iconfont.css";
import "assets/style/transition.less";
import "assets/style/cover.less";
import "assets/style/common.less";
import "moment/locale/zh-cn";
import locale from "antd/es/locale/zh_CN";
import { ConfigProvider } from "antd";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { remJs } from "utils/index";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "store";
remJs(1920);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ConfigProvider locale={locale}>
        <App />
      </ConfigProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
