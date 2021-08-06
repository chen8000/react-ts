/*
 * @Author: zhanghui.chen
 * @Date: 2021-08-06 10:24:41
 * @LastEditTime: 2021-08-06 10:52:27
 * @LastEditors: zhanghui.chen
 */

import { Table, TableProps } from "antd";
import { TemplateContainer } from "./styled";

export const TemplateTable = <T extends object>(props: TableProps<T>) => {
  return (
    <TemplateContainer className="template-table">
      <Table {...props} />
    </TemplateContainer>
  );
};
