/*
 * @Author: zhanghui.chen
 * @Date: 2021-07-23 18:54:48
 * @LastEditTime: 2021-07-23 18:55:53
 * @LastEditors: zhanghui.chen
 */
import { Breadcrumb } from "antd";
export const BreadcrumbComponent = () => {
  return (
    <Breadcrumb style={{ margin: "25px 0" }}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>List</Breadcrumb.Item>
      <Breadcrumb.Item>App</Breadcrumb.Item>
    </Breadcrumb>
  );
};
