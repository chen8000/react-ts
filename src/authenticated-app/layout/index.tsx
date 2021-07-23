/*
 * @Author: zhanghui.chen
 * @Date: 2021-07-22 16:03:36
 * @LastEditTime: 2021-07-23 19:34:36
 * @LastEditors: zhanghui.chen
 */
import { Layout } from "antd";
import { HeaderComponent } from "./header/index";
import { PageComponentStyled } from "./styled";
import { Outlet } from "react-router-dom";

const { Content } = Layout;
export const LayoutComponent = () => {
  return (
    <Layout>
      <HeaderComponent />
      <Content>
        <PageComponentStyled>
          <Outlet />
        </PageComponentStyled>
      </Content>
    </Layout>
  );
};
