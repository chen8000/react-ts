/*
 * @Author: zhanghui.chen
 * @Date: 2021-07-30 19:58:07
 * @LastEditTime: 2021-08-03 15:09:58
 * @LastEditors: zhanghui.chen
 */
import * as echarts from "echarts";
import { PropsT } from "./types";
import { useEffect, useState } from "react";
export const useChart = ({ chartRef, options }: PropsT) => {
  const [myChart, setMyChart] = useState<echarts.EChartsType>();

  useEffect(() => {
    const chart = echarts.getInstanceByDom(chartRef.current as HTMLDivElement);

    if (chart) {
      setMyChart(chart);
    } else {
      setMyChart(echarts.init(chartRef.current as HTMLDivElement));
    }
    myChart?.setOption(options);

    return () => {
      myChart && myChart.dispose();
    };
  }, [options, myChart, setMyChart, chartRef]);
};
