/*
 * @Author: zhanghui.chen
 * @Date: 2021-08-03 11:13:14
 * @LastEditTime: 2021-08-03 16:02:51
 * @LastEditors: zhanghui.chen
 */
export interface PropsT {
  data: Object;
  color: string[];
}

// item props 参数
export interface ItemPropsTypes {
  value: number; // 图标value
  trend: boolean; // 趋势
  trendValue: string; // 趋势百分比
  amount: string | number; // 数量
  colorStops: string[]; // 大圈渐变色
  minCircleColor: string; // 小圈的颜色
}
