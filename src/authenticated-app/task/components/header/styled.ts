/*
 * @Author: zhanghui.chen
 * @Date: 2021-08-03 16:29:44
 * @LastEditTime: 2021-08-03 16:30:09
 * @LastEditors: zhanghui.chen
 */
import styled from "@emotion/styled";
export const TaskHeaderStyled = styled.div`
  display: flex;
  .item {
    flex: 1;
    background: #1e233f;
    height: 3.9rem;
    border-radius: 0.05rem;
    margin-right: 0.24rem;
    padding: 0.24rem;
  }
  .item:last-child {
    margin-right: 0;
  }
`;
