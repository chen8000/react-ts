/*
 * @Author: zhanghui.chen
 * @Date: 2021-08-03 14:15:18
 * @LastEditTime: 2021-08-04 18:46:37
 * @LastEditors: zhanghui.chen
 */
import { useRef } from "react";
import { useChart } from "customHooks";
import { EChartsOption } from "echarts";
import { ItemStyled, ItemSubTitle, ItemContainer, ItemValue } from "./styled";
import { ItemPropsTypes } from "../types";
import { ActiveOptions } from "../EOptions";

export const ActiveItem = ({ data }: { data: ItemPropsTypes }) => {
  const itemRef = useRef<HTMLDivElement | null>(null);
  useChart({
    chartRef: itemRef,
    options: ActiveOptions(data) as EChartsOption,
  });

  return (
    <ItemStyled>
      <ItemSubTitle>活跃号码</ItemSubTitle>
      <ItemContainer>
        <div className={"chart-dom"} ref={itemRef}></div>
        <ItemValue>
          {/* 
            下跌  上涨 的样式，使用不同class区分
            percent-fall
            percent-rise

            iconxiajiang   下降
            iconshangzhang 上涨
            */}
          <p className={`percent percent-${data.trend ? "rise" : "fall"}`}>
            <i
              className={`iconfont ${
                data.trend ? "iconshangzhang" : "iconxiajiang"
              }`}
            ></i>
            {data.trendValue}
          </p>
          <p className={"value"}>
            {data.amount}
            <span>个</span>
          </p>
        </ItemValue>
      </ItemContainer>
    </ItemStyled>
  );
};
