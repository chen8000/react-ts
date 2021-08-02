/*
 * @Author: zhanghui.chen
 * @Date: 2021-08-02 16:47:24
 * @LastEditTime: 2021-08-02 18:49:26
 * @LastEditors: zhanghui.chen
 */

import { TopItemsTypes } from "./types";

export const TopOption = (items: TopItemsTypes[]) => {
  let bgData: number[] = [];
  let barData: number[] = []; // 进度条数据
  let labelData: object[] = []; // 左侧top1-6 数据
  items.forEach((item) => {
    bgData.push(100);
    barData.push(item.data);
    labelData.push({
      value: item.label,
      textStyle: {
        fontSize: 14,
      },
    });
  });
  return {
    grid: {
      left: "1%",
      right: "5%",
      bottom: "5%",
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
        return (
          "<span style='margin-top:5px;float:left;display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:rgba(36,207,233,0.9)'></span>" +
          // params[0].seriesName + ' : ' + Number((params[0].value.toFixed(4) / 10000).toFixed(2)).toLocaleString() + ' <br/>'
          '<div style="float:left;">' +
          "类型" +
          " : " +
          // newData[params[0].name] +
          "<br/>" +
          "人数" +
          " : " +
          params[0].value +
          "<br/>" +
          "占比 : " +
          params[0].value +
          "%" +
          "</div>"
        );
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
          textStyle: {
            color: (params: any) => {
              let itemColor = items.filter((item) => item.label === params);
              return itemColor[0].color;
            },
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
          textStyle: {
            color: (data: any) => {
              let dataColor = items.filter(
                (item) => item.data === Number(data)
              );
              return dataColor[0].color;
            },

            fontSize: 14,
          },
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
          normal: {
            barBorderRadius: 2,
            color: (params: any) => {
              return items[params.dataIndex].color;
            },
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
          normal: {
            color: "#1B375E",
            barBorderRadius: 0,
          },
        },
      },
    ],
  };
};
