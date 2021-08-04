/*
 * @Author: zhanghui.chen
 * @Date: 2021-08-04 15:32:08
 * @LastEditTime: 2021-08-04 17:15:03
 * @LastEditors: zhanghui.chen
 */
import { PaginationProps } from "antd";
export interface PaginationPropsTypes
  extends Omit<
    PaginationProps,
    "current" | "showQuickJumper" | "showSizeChanger"
  > {
  total: number;
  pageSize: number;
}
