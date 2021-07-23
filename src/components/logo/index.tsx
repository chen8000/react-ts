/*
 * @Author: zhanghui.chen
 * @Date: 2021-07-23 16:28:45
 * @LastEditTime: 2021-07-23 16:43:40
 * @LastEditors: zhanghui.chen
 */
import logo from "assets/images/logo.png";
import { LogoComponentStyled } from "./styled";

export const LogoComponent = () => {
  return (
    <LogoComponentStyled>
      <img src={logo} alt="" />
      <p>小众软件情报收集平台</p>
    </LogoComponentStyled>
  );
};
