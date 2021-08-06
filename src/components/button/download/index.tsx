/*
 * @Author: zhanghui.chen
 * @Date: 2021-08-06 10:53:30
 * @LastEditTime: 2021-08-06 12:18:54
 * @LastEditors: zhanghui.chen
 */
import { ButtonDom } from "./styled";
import { Button } from "antd";
import { HTMLAttributes } from "react";
export const DownloadButton = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <ButtonDom className="download-btn" {...props}>
      <Button htmlType="button">{props.children}</Button>
    </ButtonDom>
  );
};
