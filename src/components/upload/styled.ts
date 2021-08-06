/*
 * @Author: zhanghui.chen
 * @Date: 2021-08-06 15:00:09
 * @LastEditTime: 2021-08-06 16:33:52
 * @LastEditors: zhanghui.chen
 */
import styled from "@emotion/styled";
import { Upload } from "antd";
export const UploadNode = styled(Upload)`
  width: 100%;
  display: flex;
  cursor: pointer;
  position: relative;
  border-radius: 0.04rem;
  .ant-upload {
    width: 100%;
  }
  .ant-input {
    cursor: pointer;
    caret-color: transparent;
  }
  .ant-upload-list-item-info {
    display: none;
  }
  .ant-input-affix-wrapper {
    border-radius: 0.04rem;
  }

  .ant-upload-list {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;

    .ant-progress {
      position: absolute;
      left: 0;
      bottom: -0.04rem;
      width: 100%;
    }
  }
`;
