/*
 * @Author: zhanghui.chen
 * @Date: 2021-07-22 10:41:31
 * @LastEditTime: 2021-07-23 19:37:19
 * @LastEditors: zhanghui.chen
 */

import "./App.css";
import { LoginComponent } from "./unauthenticated-app/login";
import { LayoutComponent } from "./authenticated-app/layout";
import { Navigate, Routes, Route } from "react-router";
import { HomePage } from "authenticated-app/home";
import { AccountPage } from "authenticated-app/account";
import { FlockPage } from "authenticated-app/flock";
import { NumberPage } from "authenticated-app/number";
import { OrganizePage } from "authenticated-app/organize";
import { RolePage } from "authenticated-app/role";
import { TaskPage } from "authenticated-app/task";
import { TypePage } from "authenticated-app/type";
import { UserPage } from "authenticated-app/user";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/login"} element={<LoginComponent />} />
        <Route path={"/"} element={<LayoutComponent />}>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/account"} element={<AccountPage />} />
          <Route path={"/flock"} element={<FlockPage />} />
          <Route path={"/number"} element={<NumberPage />} />
          <Route path={"/organize"} element={<OrganizePage />} />
          <Route path={"/role"} element={<RolePage />} />
          <Route path={"/task"} element={<TaskPage />} />
          <Route path={"/type"} element={<TypePage />} />
          <Route path={"/user"} element={<UserPage />} />
        </Route>
        <Navigate to={"/login"} />
      </Routes>
    </div>
  );
}

export default App;
