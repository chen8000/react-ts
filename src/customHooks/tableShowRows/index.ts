/*
 * @Author: zhanghui.chen
 * @Date: 2021-08-04 18:39:58
 * @LastEditTime: 2021-08-04 19:11:33
 * @LastEditors: zhanghui.chen
 */

import { getBodyWH, getElemTop } from "utils";

interface Props {
  table: HTMLDivElement;
  h: number;
}
export const useTr = () => {
  return ({ table, h }: Props) => {
    let windowH = getBodyWH().height;
    let tableT = getElemTop(table);
    return parseInt(String((windowH - tableT) / h));
  };
};
