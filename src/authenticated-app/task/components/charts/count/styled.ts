/*
 * @Author: zhanghui.chen
 * @Date: 2021-07-27 18:09:41
 * @LastEditTime: 2021-08-02 16:32:44
 * @LastEditors: zhanghui.chen
 */
import styled from "@emotion/styled";
export const CountStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
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
      .value {
        font-size: 0.24rem;
      }
      .percent {
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
      padding-left: 0.5rem;
    }
  }
`;

// 图标容器
export const ChartContainerStyled = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .chart-dom {
    width: 100%;
    height: 100%;
  }
  .pie-center-content {
    position: absolute;
    font-size: 0.14rem;
    color: #fff;
    text-align: center;
    .label {
      margin: 0;
      opacity: 0.5;
    }
    .num {
      font-size: 0.23rem;
      margin: 0;
      opacity: 0.8;
      span {
        font-size: 0.15rem;
        display: inline-block;
        margin-left: 0.05rem;
        opacity: 0.6;
      }
    }
  }
`;
