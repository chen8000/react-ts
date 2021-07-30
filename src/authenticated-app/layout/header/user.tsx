/*
 * @Author: zhanghui.chen
 * @Date: 2021-07-23 18:12:30
 * @LastEditTime: 2021-07-30 17:53:46
 * @LastEditors: zhanghui.chen
 */

import { Dropdown, Avatar, Menu } from "antd";
import { DropdownContentStyled } from "./styled";
import { UserOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { RootReducer } from "./types";
export const UserComponent = () => {
  const username = useSelector<
    RootReducer,
    RootReducer["RootState"]["username"]
  >((state) => state.RootState.username);
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
          {username} <i className={"iconfont iconxiala1"}></i>
        </div>
      </Dropdown>
    </DropdownContentStyled>
  );
};
