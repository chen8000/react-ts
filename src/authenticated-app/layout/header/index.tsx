/*
 * @Author: zhanghui.chen
 * @Date: 2021-07-23 18:02:51
 * @LastEditTime: 2021-07-23 18:14:46
 * @LastEditors: zhanghui.chen
 */
import { LogoComponent } from "components/logo";
import { Layout } from "antd";
import { LayoutLogoStyled, LayoutHeaderRightStyled } from "./styled";
import { MenuComponent } from "./menu";
import { DomainListComponent } from "./domainList";
import { UserComponent } from "./user";

const { Header } = Layout;
export const HeaderComponent = () => {
  return (
    <Header>
      {/* logo */}
      <LayoutLogoStyled>
        <LogoComponent />
      </LayoutLogoStyled>

      {/* 导航 */}
      <MenuComponent />
      {/* user  ｜  select */}
      <LayoutHeaderRightStyled>
        {/* 域列表 */}
        <DomainListComponent />
        {/* 用户 */}
        <UserComponent />
      </LayoutHeaderRightStyled>
    </Header>
  );
};
