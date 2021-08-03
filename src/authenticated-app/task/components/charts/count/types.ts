/*
 * @Author: zhanghui.chen
 * @Date: 2021-07-27 18:39:43
 * @LastEditTime: 2021-08-02 16:31:55
 * @LastEditors: zhanghui.chen
 */

// propsType
export interface CountPropsTypes extends ShowTotalTypes {
  data: {
    title: string;
    total?: {
      label: string;
      value: string | number;
      unit: string;
    };
    items: CountItems[];
  };
}

// 是否显示title参数类型
export interface ShowTotalTypes {
  showTotal?: boolean;
}

// item数组的类型
export interface CountItems {
  name: string;
  value: string | number;
  percent: string | number;
}
