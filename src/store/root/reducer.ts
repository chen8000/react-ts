/*
 * @Author: zhanghui.chen
 * @Date: 2021-07-29 17:51:52
 * @LastEditTime: 2021-07-30 18:07:04
 * @LastEditors: zhanghui.chen
 */
import { ROOT_DATE } from "./actionTypes";
import { RootAction } from "./types";
import { initialState } from "./state";

export const RootState = (state = initialState, action: RootAction) => {
  switch (action.type) {
    case ROOT_DATE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
