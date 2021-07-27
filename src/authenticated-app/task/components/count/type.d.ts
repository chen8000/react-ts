/*
 * @Author: zhanghui.chen
 * @Date: 2021-07-27 18:39:43
 * @LastEditTime: 2021-07-27 18:55:14
 * @LastEditors: zhanghui.chen
 */

// propsType
export interface CountPropsTypes {
  data: {
    title: string;
    items: CountItems[];
  };
}

// item数组的类型
interface CountItems {
  title: string;
  num1: string;
  num2: string;
}
