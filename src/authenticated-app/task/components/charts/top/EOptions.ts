/*
 * @Author: zhanghui.chen
 * @Date: 2021-08-02 16:47:24
 * @LastEditTime: 2021-08-03 15:06:31
 * @LastEditors: zhanghui.chen
 */

import { TopItemsTypes } from "./types";

export const TopOption = (items: TopItemsTypes[]) => {
  let bgData: number[] = [];
  let barData: number[] = []; // 进度条数据
  let labelData: object[] = []; // 左侧top1-6 数据
  items.forEach((item) => {
    barData.push(item.data);
    labelData.push({
      value: item.label,
      textStyle: {
        fontSize: 14,
      },
    });
  });

  // 取最大值
  let maxValue = Math.max(...barData);
  for (let i = 0; i < barData.length; i++) {
    bgData.push(maxValue + 100);
  }

  return {
    grid: {
      left: "1%",
      right: "1%",
      bottom: "0%",
      top: "5%",
      containLabel: true,
    },
    tooltip: {
      backgroundColor: "rgb(72, 84, 101,.9)",
      borderColor: "rgb(72, 84, 101,.9)",
      textStyle: {
        color: "#fff",
      },
      trigger: "axis",

      axisPointer: {
        type: "none",
      },
      formatter: function (params: any) {
        let formatterData = items[params[0].dataIndex];
        return `<span style='margin-top:5px;float:left;display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:${formatterData.color}'></span>
          <div style="float:left;">
            类型：${formatterData.type}
            <br/>
            人数：${formatterData.data}
            <br/>
            占比：${formatterData.percent}
          </div>
          `;
      },
    },
    //backgroundColor: "rgb(20,28,52)",
    xAxis: {
      show: false,
      type: "value",
    },
    yAxis: [
      {
        type: "category",
        inverse: true,
        axisLabel: {
          show: true,
          color: (params: any) => {
            let itemColor = items.filter((item) => item.label === params);
            return itemColor[0].color;
          },
        },
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        data: labelData,
      },
      {
        type: "category",
        inverse: true,
        axisTick: "none",
        axisLine: "none",
        show: true,
        axisLabel: {
          color: (data: any) => {
            let dataColor = items.filter((item) => item.data === Number(data));
            return dataColor[0].color;
          },
          fontSize: 14,
          formatter: function (value: string | number) {
            let typeValue = items.filter((item) => item.data === Number(value));
            return `${typeValue[0].type}  ${typeValue[0].data}`;
          },
        },
        data: barData,
      },
    ],
    series: [
      {
        type: "bar",
        zlevel: 1,
        itemStyle: {
          height: 10,
          fontSize: 20,
          borderRadius: 2,
          color: (params: any) => {
            return items[params.dataIndex].color;
          },
        },
        barWidth: 12,
        data: barData,
      },
      {
        type: "bar",
        barWidth: 12,
        barGap: "-100%",
        data: bgData,
        itemStyle: {
          color: "#1B375E",
          borderRadius: 0,
        },
      },
    ],
  };
};
