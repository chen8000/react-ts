/*
 * @Author: zhanghui.chen
 * @Date: 2021-07-27 20:34:14
 * @LastEditTime: 2021-07-30 17:46:29
 * @LastEditors: zhanghui.chen
 */
import { DatePicker } from "antd";
import locale from "antd/es/date-picker/locale/zh_CN";
import moment from "moment";
import { useState, useEffect } from "react";
import { setRootDate } from "store/root/actions";
import { RootReducer } from "./types";
import { useDispatch, useSelector } from "react-redux";

const { RangePicker } = DatePicker;

export const DatePickerComponent = () => {
  const dispatch = useDispatch();

  // 拿到store中存储的时间
  const defaultValue = useSelector<RootReducer, RootReducer["RootState"]>(
    (state) => state.RootState
  );

  const dateFormat = "YYYY.MM.DD";
  const [value, setValue] = useState<string[]>();

  useEffect(() => {
    value && dispatch(setRootDate({ date: value }));
  }, [value, dispatch]);

  return (
    <>
      <RangePicker
        locale={locale}
        format={dateFormat}
        allowClear={false}
        disabledDate={(current) => current && current > moment().endOf("day")}
        defaultValue={[
          moment(defaultValue.date ? defaultValue.date[0] : "", dateFormat),
          moment(defaultValue.date ? defaultValue.date[1] : "", dateFormat),
        ]}
        onChange={(dates, dateStrings) => setValue(dateStrings)}
      />
    </>
  );
};
