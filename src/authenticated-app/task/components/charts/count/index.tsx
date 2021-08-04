/*
 * @Author: zhanghui.chen
 * @Date: 2021-07-27 18:00:05
 * @LastEditTime: 2021-08-04 18:46:45
 * @LastEditors: zhanghui.chen
 */
import { CountStyled, ChartContainerStyled } from "./styled";
import { CountPropsTypes } from "./types";
import { useRef } from "react";

import { CountOptions } from "./EOptions";
import { useChart } from "customHooks";
import { EChartsOption } from "echarts";
import { TitleStyled } from "../../common/styled";

export const CountComponent = ({ data, showTotal }: CountPropsTypes) => {
  const chartRef = useRef(null);

  // 渲染echarts
  useChart({
    chartRef,
    options: CountOptions(data.items) as EChartsOption,
  });

  return (
    <CountStyled>
      <TitleStyled>{data.title}</TitleStyled>
      <div className={"counts"}>
        {data.items.map((item) => (
          <div className={"count-item"} key={item.name}>
            <p>{item.name}</p>
            <div>
              <span className={"value"}>{item.value}</span>个
              <span className={"percent"}>{item.percent}</span>
            </div>
          </div>
        ))}
      </div>
      <ChartContainerStyled>
        <div className={"chart-dom"} ref={chartRef}></div>
        {/* 图标中间文字   -- 根据参数控制是否显示*/}
        {showTotal && (
          <div className={"pie-center-content"}>
            <p className={"label"}>{data.total?.label}</p>
            <p className={"num"}>
              {data.total?.value}
              <span>{data.total?.unit}</span>
            </p>
          </div>
        )}
      </ChartContainerStyled>
    </CountStyled>
  );
};
