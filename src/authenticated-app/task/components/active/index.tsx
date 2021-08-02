/*
 * @Author: zhanghui.chen
 * @Date: 2021-08-02 19:31:27
 * @LastEditTime: 2021-08-02 19:35:47
 * @LastEditors: zhanghui.chen
 */

import { TitleStyled } from "../common/styled";
import { ActiveStyled } from "./styled";
export const ActiveComponent = () => {
  return (
    <ActiveStyled>
      <TitleStyled>今日活跃度</TitleStyled>
      <div>123</div>
    </ActiveStyled>
  );
};
