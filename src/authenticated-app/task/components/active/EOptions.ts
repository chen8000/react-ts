/*
 * @Author: zhanghui.chen
 * @Date: 2021-08-03 11:10:07
 * @LastEditTime: 2021-08-03 16:09:17
 * @LastEditors: zhanghui.chen
 */
import { ItemPropsTypes } from "./types";
export const ActiveOptions = (data: ItemPropsTypes) => {
  return {
    title: {
      text: data.value + "%",
      textStyle: {
        color: data.colorStops[0],
        fontSize: 12,
      },
      // itemGap: 20,
      left: "center",
      top: "center",
    },
    angleAxis: {
      max: 100,
      clockwise: false, // 逆时针
      // 隐藏刻度线
      show: false,
      startAngle: 110,
    },
    radiusAxis: {
      type: "category",
      show: true,
      axisLabel: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
    },
    polar: [
      {
        center: ["50%", "50%"], //中心点位置
        radius: "150%", //图形大小
      },
    ],
    series: [
      {
        name: "小环",
        type: "gauge",
        radius: "55%",
        center: ["50%", "50%"],
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
      },
      {
        type: "bar",
        z: 10,
        data: [data.value],
        coordinateSystem: "polar",
        roundCap: true,
        barWidth: 10,
        itemStyle: {
          opacity: 1,
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 1,
            y2: 1,

            colorStops: [
              {
                offset: 0,
                color: data.colorStops[0], // 0% 处的颜色
              },
              {
                offset: 1,
                color: data.colorStops[1], // 100% 处的颜色
              },
            ],
          },
          // shadowBlur: 5,
          // shadowColor: "#2A95F9",
        },
      },
      {
        type: "pie",
        name: "内层细圆环",
        radius: ["79%", "73%"],
        startAngle: 110,
        clockwise: true,
        itemStyle: {
          color: data.minCircleColor,
        },
        label: {
          show: false,
        },
        data: [100],
      },
    ],
  };
};
