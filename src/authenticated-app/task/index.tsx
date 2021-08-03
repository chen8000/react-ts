/*
 * @Author: zhanghui.chen
 * @Date: 2021-07-23 18:23:14
 * @LastEditTime: 2021-08-03 16:35:35
 * @LastEditors: zhanghui.chen
 */

import { TaskContainerStyled, TaskTableContainerStyled } from "./styled";
import { HeaderComponent } from "./components/header";

export const TaskPage = () => {
  return (
    <TaskContainerStyled>
      {/* header 负责渲染echarts*/}
      <HeaderComponent />
      {/* 表格 */}
      <TaskTableContainerStyled></TaskTableContainerStyled>
    </TaskContainerStyled>
  );
};
