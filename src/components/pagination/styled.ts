/*
 * @Author: zhanghui.chen
 * @Date: 2021-08-04 12:17:30
 * @LastEditTime: 2021-08-04 17:02:59
 * @LastEditors: zhanghui.chen
 */
import styled from "@emotion/styled";
export const PaginationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const StartEnd = styled.span`
  margin: 0 0.08rem;
  span {
    display: inline-block;
    height: 0.32rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 0.1rem;
    background: #222948;
    border: 1px solid #222948;
    font-size: 0.12rem;
    color: #fff;
    cursor: pointer;
    transition: all 0.3s ease;
    user-select: none;

    &:hover {
      color: #978cf5;
      border: 1px solid #978cf5;
    }
  }
  span.disabled {
    cursor: not-allowed;
    color: rgba(255, 255, 255, 0.5);
    border: 1px solid rgba(255, 255, 255, 0);
  }
`;

// goto
export const GoToContainer = styled.div`
  display: flex;
  white-space: nowrap;
  align-items: center;
  input {
    margin: 0 0.08rem;
    width: 0.5rem;
  }
`;
