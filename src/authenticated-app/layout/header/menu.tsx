/*
 * @Author: zhanghui.chen
 * @Date: 2021-07-23 18:06:51
 * @LastEditTime: 2021-08-04 17:36:28
 * @LastEditors: zhanghui.chen
 */
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { useSelector } from "react-redux";
import { RootReducer } from "./types";
export const MenuComponent = () => {
  const location = useLocation();
  const menu = useSelector<RootReducer, RootReducer["RootState"]["menu"]>(
    (state) => state.RootState.menu
  );

  return (
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={[location.pathname]}
    >
      {menu?.map((item) =>
        item.path ? (
          <Menu.Item key={item.path}>
            <Link to={item.path}>{item.label}</Link>
          </Menu.Item>
        ) : (
          <Menu.SubMenu key={item.label} title={item.label}>
            {item.child?.map(
              (item) =>
                item.path && (
                  <Menu.Item key={item.path}>
                    <Link to={item.path}>{item.label}</Link>
                  </Menu.Item>
                )
            )}
          </Menu.SubMenu>
        )
      )}
    </Menu>
  );
};
