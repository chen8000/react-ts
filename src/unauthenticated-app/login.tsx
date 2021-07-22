/*
 * @Author: zhanghui.chen
 * @Date: 2021-07-22 16:01:24
 * @LastEditTime: 2021-07-22 19:19:42
 * @LastEditors: zhanghui.chen
 */
import { BgComponent, FormComponent, FooterInfo } from "./styled";
// import { Form, Input, Button } from "antd";
import { DomainComponent } from "./domain";
import { UserComponent } from "./user";
import loginBg from "assets/images/bg.png";
import loginBg2 from "assets/images/bg-left.png";
import logo from "assets/images/logo.png";

export const LoginComponent = () => {
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
          <h3>登录</h3>
          {/* 登陆域 */}
          {/* <DomainComponent /> */}
          {/* 登陆用户 */}
          <UserComponent />

          <FooterInfo>杭州芸品绿信息科技有限公司 V1.0.0</FooterInfo>
        </div>
      </FormComponent>
    </>
  );
};
