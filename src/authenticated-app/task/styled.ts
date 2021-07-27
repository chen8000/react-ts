/*
 * @Author: zhanghui.chen
 * @Date: 2021-07-27 16:48:42
 * @LastEditTime: 2021-07-27 19:00:59
 * @LastEditors: zhanghui.chen
 */
import styled from "@emotion/styled";

export const TaskContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TaskHeaderStyled = styled.div`
  display: flex;
  .item {
    flex: 1;
    background: #1e233f;
    height: 4rem;
    border-radius: 0.05rem;
    margin-right: 0.24rem;
    padding: 0.24rem;
  }
  .item:last-child {
    margin-right: 0;
  }
`;
