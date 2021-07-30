/*
 * @Author: zhanghui.chen
 * @Date: 2021-07-29 17:51:32
 * @LastEditTime: 2021-07-30 17:45:59
 * @LastEditors: zhanghui.chen
 */
import { AppDispatch } from "store";
import { ROOT_DATE } from "./actionTypes";
import { RootAction, RootStateType } from "./types";

// action 返回一个type{}
export const setRootState = (payload: RootStateType): RootAction => ({
  type: ROOT_DATE,
  payload,
});

// 修改state
export const setRootDate =
  (value: RootStateType) => async (dispatch: AppDispatch) => {
    dispatch(setRootState(value));
  };
