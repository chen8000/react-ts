/*
 * @Author: zhanghui.chen
 * @Date: 2021-07-30 18:40:56
 * @LastEditTime: 2021-08-02 16:08:40
 * @LastEditors: zhanghui.chen
 */
import { CountItems } from "./types";
export const CountOptions = (items: CountItems[]) => {
  const colors = ["#7BC5F3", "#FFE28C"];

  // data
  let data: unknown[] = [];
  items.forEach((item, i) => {
    data.push({
      value: item.value,
      name: item.name,
      percent: item.percent,
      itemStyle: {
        color: colors[i],
      },
    });
  });

  return {
    tooltip: {
      trigger: "item",
      formatter: function (params: any) {
        return `
        <span style="display:inline-block;margin-right:5px;border-radius:50%;width:8px;height:8px;background-color:${params.color};"></span>
        ${params.name} : ${params.value} <br/>
        <span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:rgba(0,0,0,0);"></span>
        占比 : ${params.data.percent}
        `;
      },
      backgroundColor: "rgb(72, 84, 101,.9)",
      borderColor: "rgb(72, 84, 101,.9)",
      textStyle: {
        color: "#fff",
      },
      padding: [5, 10],
    },
    legend: {
      top: "18%",
      right: "0",
      orient: "vertical",
      selectedMode: false,
      icon: "circle",
      itemWidth: 10,
      itemHeight: 10,
      itemGap: 10,
      textStyle: {
        //图例文字的样式
        color: "#ccc",
        fontSize: 12,
      },
    },
    series: [
      {
        // name: "",
        type: "pie",
        radius: ["50%", "63%"],
        avoidLabelOverlap: false,
        itemStyle: {
          // borderRadius: 10,
          borderColor: "#1e233f",
          borderWidth: 3,
        },
        label: {
          show: false,
          position: "center",
        },
        labelLine: {
          show: false,
        },
        data,
      },
    ],
  };
};
