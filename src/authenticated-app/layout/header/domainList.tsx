/*
 * @Author: zhanghui.chen
 * @Date: 2021-07-23 18:10:29
 * @LastEditTime: 2021-07-30 18:15:52
 * @LastEditors: zhanghui.chen
 */

import { Select } from "antd";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootReducer } from "./types";
import { setRootDate } from "store/root/actions";

export const DomainListComponent = () => {
  const dispatch = useDispatch();

  const rootState = useSelector<RootReducer, RootReducer["RootState"]>(
    (state) => state.RootState
  );

  const [value, setValue] = useState(1);

  useEffect(() => {
    dispatch(setRootDate({ domainValue: value }));
  }, [value, dispatch]);

  return (
    <Select
      defaultValue={rootState.domainValue}
      onChange={(val) => setValue(val)}
      placeholder="请选择域"
      style={{ width: 120 }}
      listHeight={180}
    >
      {rootState.domainList?.map((item) => (
        <Select.Option key={item.id} value={item.id}>
          {item.label}
        </Select.Option>
      ))}
    </Select>
  );
};
