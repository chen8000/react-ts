/*
 * @Author: zhanghui.chen
 * @Date: 2021-07-30 18:00:09
 * @LastEditTime: 2021-07-30 18:15:16
 * @LastEditors: zhanghui.chen
 */
import moment from "moment";
import { RootStateType } from "./types";

export const initialState: RootStateType = {
  // 默认当天
  date: [moment().format("YYYY.MM.DD"), moment().format("YYYY.MM.DD")],
  // 域列表
  domainList: [
    { label: "域1", id: 1 },
    { label: "域2", id: 2 },
    { label: "域3", id: 3 },
    { label: "域4", id: 4 },
    { label: "域5", id: 5 },
    { label: "域6", id: 6 },
    { label: "域7", id: 7 },
    { label: "域8", id: 8 },
    { label: "域9", id: 9 },
    { label: "域10", id: 10 },
    { label: "域11", id: 11 },
    { label: "域12", id: 12 },
  ],
  domainValue: 1, // 域列表被选中的值
  username: "admin", // 用户名

  // 权限菜单
  menu: [
    { path: "/", label: "首页" },
    { path: "/task", label: "任务管理" },
    { path: "/number", label: "号码展示" },
    { path: "/account", label: "TG账号管理" },
    { path: "/flock", label: "群信息展示" },
    { path: "/type", label: "类型管理" },
    {
      label: "系统设置",
      child: [
        { path: "/organize", label: "组织管理" },
        { path: "/role", label: "角色管理" },
        { path: "/user", label: "用户管理" },
      ],
    },
  ],
};
