/*
 * @Author: zhanghui.chen
 * @Date: 2021-07-22 16:01:24
 * @LastEditTime: 2021-07-23 12:07:20
 * @LastEditors: zhanghui.chen
 */

import loginBg from "assets/images/bg.png";
import loginBg2 from "assets/images/bg-left.png";
import logo from "assets/images/logo.png";
import {
  BgComponent,
  FormComponent,
  FooterInfo,
  GoLoginDomain,
} from "./styled";
import { DomainLoginComponent } from "./domain-login";
import { UserLoginComponent } from "./user-login";
import { useState } from "react";

export const LoginComponent = () => {
  // 域登录
  const [domainLogin, setDomainLogin] = useState(false);
  // 域登录成功
  const onDomainLoginSuccess = () => {
    setDomainLogin(true);
  };

  return (
    <>
      {/* 背景 */}
      <BgComponent>
        <img className={"bg1"} src={loginBg} alt="" />
        <img className={"bg2"} src={loginBg2} alt="" />
      </BgComponent>

      {/* 登陆框 */}
      <FormComponent>
        <div className={"header"}>
          <img src={logo} alt="" />
          <p>小众软件情报收集平台</p>
        </div>
        <div className={"content"}>
          {/* 返回按钮 */}
          {domainLogin && (
            <GoLoginDomain
              className={"radius-2"}
              onClick={() => setDomainLogin(false)}
            >
              <i className={"iconfont icon2fanhui"}></i>
            </GoLoginDomain>
          )}

          <h3>登录</h3>
          {/* 登陆域 -- 登陆用户*/}
          {domainLogin ? (
            <UserLoginComponent />
          ) : (
            <DomainLoginComponent onDomainLoginSuccess={onDomainLoginSuccess} />
          )}

          <FooterInfo>杭州芸品绿信息科技有限公司 V1.0.0</FooterInfo>
        </div>
      </FormComponent>
    </>
  );
};
