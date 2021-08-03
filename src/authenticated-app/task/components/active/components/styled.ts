/*
 * @Author: zhanghui.chen
 * @Date: 2021-08-03 14:43:05
 * @LastEditTime: 2021-08-03 15:52:27
 * @LastEditors: zhanghui.chen
 */
import styled from "@emotion/styled";

export const ItemStyled = styled.div`
  width: calc(50% - 0.09rem);
  margin-top: 0.18rem;
  background: #1e233f;
  box-shadow: 0px 5px 10px 0px rgba(129, 129, 129, 0.2);
  border-radius: 15px;
  padding: 0.1rem;
  display: flex;
  flex-direction: column;
  height: 1.45rem;
  &:nth-of-type(2n-1) {
    margin-right: 0.18rem;
  }
`;

// 副标题
export const ItemSubTitle = styled.h4`
  font-size: 0.16rem;
  color: #fff;
  font-weight: normal;
  padding-left: 0.05rem;
`;

// item容器
export const ItemContainer = styled.div`
  flex: 1;
  display: flex;
  .chart-dom {
    width: 50%;
  }
`;

export const ItemValue = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    margin: 0;
  }
  .percent {
    font-size: 0.14rem;
    color: #6dd230;
    margin-bottom: 0.06rem;
    .iconfont {
      font-size: 0.18rem;
      display: inline-block;
      margin-right: 0.05rem;
    }
  }
  // 下跌
  .percent-fall {
    color: #6dd230;
  }
  // 上涨
  .percent-rise {
    color: #ff8c8c;
    .iconfont {
      font-size: 0.22rem;
    }
  }
  .value {
    font-size: 0.18rem;
    span {
      font-size: 0.15rem;
      display: inline-block;
      margin-left: 0.02rem;
    }
  }
`;
