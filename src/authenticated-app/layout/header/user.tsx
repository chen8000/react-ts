/*
 * @Author: zhanghui.chen
 * @Date: 2021-07-23 18:12:30
 * @LastEditTime: 2021-07-23 18:14:08
 * @LastEditors: zhanghui.chen
 */

import { Dropdown, Avatar, Menu } from "antd";
import { DropdownContentStyled } from "./styled";
import { UserOutlined } from "@ant-design/icons";
export const UserComponent = () => {
  return (
    <DropdownContentStyled>
      <Avatar icon={<UserOutlined />} />
      <Dropdown
        overlay={
          <Menu>
            <Menu.Item>重置密码</Menu.Item>
            <Menu.Item>退出登录</Menu.Item>
          </Menu>
        }
        trigger={["click"]}
      >
        <div className={"user-dropdown"}>
          admin <i className={"iconfont iconxiala1"}></i>
        </div>
      </Dropdown>
    </DropdownContentStyled>
  );
};
