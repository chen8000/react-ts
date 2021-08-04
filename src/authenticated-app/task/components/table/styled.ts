/*
 * @Author: zhanghui.chen
 * @Date: 2021-08-04 19:27:51
 * @LastEditTime: 2021-08-04 19:28:40
 * @LastEditors: zhanghui.chen
 */

import styled from "@emotion/styled";
// 表格container
export const TaskTableContainerStyled = styled.div`
  flex: 1;
  background: #1e233f;
  margin-top: 0.24rem;
  border-radius: 0.04rem;
  padding: 0.24rem;
  display: flex;
  flex-direction: column;
`;

// search
export const SearchBarStyled = styled.div`
  display: flex;
  justify-content: space-between;
`;

// 按钮组
export const BtnGroupStyled = styled.div`
  display: flex;
  button {
    margin-left: 0.24rem;
  }
`;

// table盒子
export const TableContainer = styled.div`
  flex: 1;
  margin-top: 0.24rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
