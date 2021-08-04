/*
 * @Author: zhanghui.chen
 * @Date: 2021-08-04 12:13:39
 * @LastEditTime: 2021-08-04 17:34:51
 * @LastEditors: zhanghui.chen
 */
import { Pagination, Input } from "antd";
import { useState } from "react";
import { PaginationContainer, StartEnd, GoToContainer } from "./styled";
import { PaginationPropsTypes } from "./types";
import { removeAllSpace, removeNotNumber } from "utils/vilidate";

export const PaginationComponent = (position: PaginationPropsTypes) => {
  const [currentVal, setcurrentVal] = useState(1);
  const [inputValue, setInputValue] = useState<string | number>("");

  // pagesize，分了多少页
  const pageSize = Math.ceil(position.total / position.pageSize);

  // 跳至xx页 失去焦点
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    let val: string | number = e.target.value;

    if (val === "0" || !val || isNaN(Number(val))) {
      setInputValue("");
      return;
    }
    if (Number(val) > pageSize) {
      val = pageSize;
    }
    setcurrentVal(Number(val));
    setInputValue("");
  };

  // input value改变
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(removeNotNumber(removeAllSpace(e.target.value)));
  };

  return (
    <PaginationContainer>
      <GoToContainer>
        前往
        <Input
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleBlur}
        />
        页
      </GoToContainer>
      <StartEnd
        onClick={() => {
          currentVal !== 1 && setcurrentVal(1);
        }}
      >
        <span className={currentVal === 1 ? "disabled" : ""}>首页</span>
      </StartEnd>
      <Pagination
        {...position}
        onChange={(page, pageSize) => {
          // 调用position传进来的onChange
          position.onChange && position.onChange(page, pageSize);
          setcurrentVal(page);
        }}
        current={currentVal}
        showQuickJumper={false}
        showSizeChanger={false}
      />
      <StartEnd
        onClick={() => {
          currentVal !== pageSize && setcurrentVal(pageSize);
        }}
      >
        <span className={currentVal === pageSize ? "disabled" : ""}>末页</span>
      </StartEnd>
    </PaginationContainer>
  );
};
