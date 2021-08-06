/*
 * @Author: zhanghui.chen
 * @Date: 2021-07-22 16:01:24
 * @LastEditTime: 2021-08-06 15:16:10
 * @LastEditors: zhanghui.chen
 */

import loginBg from "assets/images/bg.png";
import loginBg2 from "assets/images/bg-left.png";

import {
  BgComponentStyled,
  FormComponentStyled,
  FooterInfoStyled,
  GoLoginDomainStyled,
} from "./styled";
import { DomainLoginComponent } from "./domain-login";
import { UserLoginComponent } from "./user-login";
import { LogoComponent } from "components";
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
      <BgComponentStyled>
        <img className={"bg1"} src={loginBg} alt="" />
        <img className={"bg2"} src={loginBg2} alt="" />
      </BgComponentStyled>

      {/* 登陆框 */}
      <FormComponentStyled>
        <LogoComponent />
        <div className={"content"}>
          {/* 返回按钮 */}
          {domainLogin && (
            <GoLoginDomainStyled
              className={"radius-2"}
              onClick={() => setDomainLogin(false)}
            >
              <i className={"iconfont icon2fanhui"}></i>
            </GoLoginDomainStyled>
          )}

          <h3>登录</h3>
          {/* 登陆域 -- 登陆用户*/}
          {domainLogin ? (
            <UserLoginComponent />
          ) : (
            <DomainLoginComponent onDomainLoginSuccess={onDomainLoginSuccess} />
          )}

          <FooterInfoStyled>杭州芸品绿信息科技有限公司 V1.0.0</FooterInfoStyled>
        </div>
      </FormComponentStyled>
    </>
  );
};
