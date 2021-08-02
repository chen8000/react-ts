/*
 * @Author: zhanghui.chen
 * @Date: 2021-08-02 16:37:04
 * @LastEditTime: 2021-08-02 18:32:48
 * @LastEditors: zhanghui.chen
 */
import { TitleStyled } from "../common/styled";
import { TopStyled } from "./styled";
import { useRef } from "react";
import { useChart } from "customHooks/chart";
import { TopOption } from "./EOptions";
import { EChartsOption } from "echarts";
import { TopItemsTypes } from "./types";

export const TopComponent = () => {
  const chartRef = useRef<HTMLDivElement | null>(null);

  let items = [
    {
      data: 50,
      label: "TOP1",
      color: "#FF8C8C",
      type: "不良言论",
    },
    {
      data: 60,
      label: "TOP2",
      color: "#FFB685",
      type: "其他\xa0\xa0\xa0\xa0\xa0\xa0",
    },
    {
      data: 70,
      label: "TOP3",
      color: "#FFE28C",
      type: "博彩娱乐",
    },
    {
      data: 20,
      label: "TOP4",
      color: "#A1ACBB",
      type: "宗教问题",
    },
    {
      data: 30,
      label: "TOP5",
      color: "#A1ACBB",
      type: "暗网\xa0\xa0\xa0\xa0\xa0\xa0",
    },
    {
      data: 10,
      label: "TOP6",
      color: "#A1ACBB",
      type: "淫秽色情",
    },
  ];

  useChart({ chartRef, options: TopOption(items) as EChartsOption });
  return (
    <TopStyled>
      <TitleStyled>违法类型人数</TitleStyled>
      <div className={"chart-dom"} ref={chartRef}></div>
    </TopStyled>
  );
};
