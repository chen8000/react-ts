/*
 * @Author: zhanghui.chen
 * @Date: 2021-07-23 18:06:51
 * @LastEditTime: 2021-07-23 19:36:42
 * @LastEditors: zhanghui.chen
 */
import { Menu } from "antd";
import { Link } from "react-router-dom";
export const MenuComponent = () => {
  const menu = [
    { path: "/", label: "首页" },
    { path: "/task", label: "任务管理" },
    { path: "/number", label: "号码展示" },
    { path: "/account", label: "TG账号管理" },
    { path: "/flock", label: "群信息展示" },
    { path: "/type", label: "类型管理" },
    {
      label: "系统设置",
      child: [
        { path: "/organize", label: "组织管理" },
        { path: "/role", label: "角色管理" },
        { path: "/user", label: "用户管理" },
      ],
    },
  ];
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={[menu[0].path || "/home"]}
    >
      {menu.map((item) =>
        item.path ? (
          <Menu.Item key={item.path}>
            <Link to={item.path}>{item.label}</Link>
          </Menu.Item>
        ) : (
          <Menu.SubMenu key={item.label} title={item.label}>
            {item.child?.map((item) => (
              <Menu.Item key={item.path}>
                <Link to={item.path}>{item.label}</Link>
              </Menu.Item>
            ))}
          </Menu.SubMenu>
        )
      )}
    </Menu>
  );
};
