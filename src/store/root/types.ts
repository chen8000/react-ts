/*
 * @Author: zhanghui.chen
 * @Date: 2021-07-29 17:52:03
 * @LastEditTime: 2021-07-30 18:13:04
 * @LastEditors: zhanghui.chen
 */
import { ROOT_DATE } from "./actionTypes";

// global State
export interface RootStateType {
  date?: string[]; // 日期
  domainList?: DomainItemType[];
  domainValue?: number; // 域列表的值
  username?: string; // 用户名
  menu?: IMenuItem[]; // 导航菜单
}

// action 类型
export interface RootAction {
  type: typeof ROOT_DATE;
  payload: RootStateType;
}

// 域item
export interface DomainItemType {
  label: string;
  id: number;
}

// 导航菜单
export interface MenuItemType {
  path?: string;
  label: string;
}
// 导航菜单
export interface IMenuItem extends MenuItemType {
  child?: MenuItemType[];
}
