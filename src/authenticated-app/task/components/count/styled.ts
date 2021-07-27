/*
 * @Author: zhanghui.chen
 * @Date: 2021-07-27 18:09:41
 * @LastEditTime: 2021-07-27 18:59:44
 * @LastEditors: zhanghui.chen
 */
import styled from "@emotion/styled";
export const CountStyled = styled.div`
  .title {
    font-size: 0.2rem;
    font-weight: normal;
  }
  .counts {
    display: flex;
    margin-top: 0.15rem;
  }
  .count-item {
    flex: 1;
    & > p {
      color: #a1acbb;
      margin-bottom: 0.08rem;
    }
    & > div {
      color: #fff;
      .num1 {
        font-size: 0.24rem;
      }
      .num2 {
        display: inline-block;
        margin-left: 0.24rem;
      }
    }
  }
  .count-item:last-child {
    position: relative;
    &:after {
      content: "";
      display: block;
      width: 1px;
      height: 0.4rem;
      background: #778ca2;
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      margin: auto 0;
    }
    & > div,
    & > p {
      padding-left: 0.6rem;
    }
  }
`;
