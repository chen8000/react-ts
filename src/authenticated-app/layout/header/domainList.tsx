/*
 * @Author: zhanghui.chen
 * @Date: 2021-07-23 18:10:29
 * @LastEditTime: 2021-07-23 18:11:27
 * @LastEditors: zhanghui.chen
 */

import { Select } from "antd";

export const DomainListComponent = () => {
  return (
    <Select defaultValue="lucy" style={{ width: 120 }}>
      <Select.Option value="lucy">lucy</Select.Option>
      <Select.Option value="jack2">jack2</Select.Option>
      <Select.Option value="jack3">jack3</Select.Option>
    </Select>
  );
};
