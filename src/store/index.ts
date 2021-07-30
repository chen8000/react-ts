/*
 * @Author: zhanghui.chen
 * @Date: 2021-07-29 17:51:06
 * @LastEditTime: 2021-07-30 17:45:47
 * @LastEditors: zhanghui.chen
 */
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { RootState } from "./root/reducer";

// 整合 reducer
const reducer = combineReducers({ RootState });

// 注册
const store = createStore(reducer, applyMiddleware(thunk));

// dispatch类型
export type AppDispatch = typeof store.dispatch;

export default store;
