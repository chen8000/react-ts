/*
 * @Author: zhanghui.chen
 * @Date: 2021-08-06 14:44:44
 * @LastEditTime: 2021-08-06 16:35:11
 * @LastEditors: zhanghui.chen
 */

import { message, UploadProps } from "antd";
import { useState } from "react";
import { UploadNode } from "./styled";
import { FormInput } from "components";

export const CreateUpload = (props: Omit<UploadProps, "progress">) => {
  const [uploadValue, setUploadValue] = useState("点击上传文件");

  // 上传中、完成、失败都会调用这个函数。
  const onUploadChange = (info: any) => {
    props.onChange && props.onChange(info);

    const name = info.file.name;
    if (info.file.status === "done") {
      setUploadValue(name);
      message.success(`${name} 上传成功`);
    } else if (info.file.status === "error") {
      message.error(`${name} 上传失败`);
    }
  };

  return (
    <UploadNode
      {...props}
      onChange={onUploadChange}
      progress={{ strokeWidth: 4, showInfo: false }}
    >
      <FormInput
        placeholder={uploadValue}
        suffix={<i className={"iconfont icondakaiwenjian"} />}
      />
    </UploadNode>
  );
};
