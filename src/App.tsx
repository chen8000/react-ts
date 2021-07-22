/*
 * @Author: zhanghui.chen
 * @Date: 2021-07-22 10:41:31
 * @LastEditTime: 2021-07-22 19:27:49
 * @LastEditors: zhanghui.chen
 */

import "./App.css";

import { LoginComponent } from "./unauthenticated-app/login";
// import { LayoutComponent } from "./authenticated-app/layout";

function App() {
  return (
    <div className="App">
      <LoginComponent />
    </div>
  );
}

export default App;
