/*
 * @Author: zhanghui.chen
 * @Date: 2021-07-23 18:23:14
 * @LastEditTime: 2021-08-04 19:31:27
 * @LastEditors: zhanghui.chen
 */

import { TaskContainerStyled } from "./styled";
import { HeaderComponent } from "./components/header";
import { TableComponent } from "./components/table";

export const TaskPage = () => {
  return (
    <TaskContainerStyled>
      {/* header 负责渲染echarts*/}
      <HeaderComponent />
      {/* 表格 */}
      <TableComponent />
    </TaskContainerStyled>
  );
};
