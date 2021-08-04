/*
 * @Author: zhanghui.chen
 * @Date: 2021-07-27 16:48:42
 * @LastEditTime: 2021-08-04 11:52:12
 * @LastEditors: zhanghui.chen
 */
import styled from "@emotion/styled";

export const TaskContainerStyled = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

// 表格container
export const TaskTableContainerStyled = styled.div`
  flex: 1;
  background: #1e233f;
  margin-top: 0.24rem;
  border-radius: 0.04rem;
  padding: 0.24rem;
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
  margin-top: 0.24rem;
`;
