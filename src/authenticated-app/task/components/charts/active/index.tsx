/*
 * @Author: zhanghui.chen
 * @Date: 2021-08-02 19:31:27
 * @LastEditTime: 2021-08-03 16:39:50
 * @LastEditors: zhanghui.chen
 */

import { TitleStyled } from "../../common/styled";
import { ActiveStyled, ItemsContainerStyled } from "./styled";
import { ActiveItem } from "./components/item";
export const ActiveComponent = () => {
  // 活跃
  const activeData = {
    value: 88.88,
    trend: true, // true 涨 反之跌
    trendValue: "9.54%",
    amount: "2000",
    colorStops: ["#EF7CA9", "#F7B679"],
    minCircleColor: "#655555",
  };
  // 一般
  const generallyData = {
    value: 66.66,
    trend: false, // true 涨 反之跌
    trendValue: "1.54%",
    amount: "2000",
    colorStops: ["#63C9EC", "#9E8DF6"],
    minCircleColor: "#4D6687",
  };
  // 不活跃
  const differenceData = {
    value: 18.88,
    trend: true, // true 涨 反之跌
    trendValue: "10.01%",
    amount: "2000",
    colorStops: ["#66E8A8", "#58C597"],
    minCircleColor: "#446355",
  };

  return (
    <ActiveStyled>
      <TitleStyled>今日活跃度</TitleStyled>
      <ItemsContainerStyled>
        <ActiveItem data={activeData} />
        <ActiveItem data={generallyData} />
        <ActiveItem data={differenceData} />
      </ItemsContainerStyled>
    </ActiveStyled>
  );
};
