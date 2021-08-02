/*
 * @Author: zhanghui.chen
 * @Date: 2021-07-30 19:59:34
 * @LastEditTime: 2021-08-02 10:20:40
 * @LastEditors: zhanghui.chen
 */
import { EChartsOption } from "echarts";
export interface PropsT {
  chartRef: React.MutableRefObject<HTMLDivElement | null>;
  options: EChartsOption;
}
