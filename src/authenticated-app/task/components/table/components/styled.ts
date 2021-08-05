/*
 * @Author: zhanghui.chen
 * @Date: 2021-08-05 15:24:26
 * @LastEditTime: 2021-08-05 18:21:54
 * @LastEditors: zhanghui.chen
 */
import styled from "@emotion/styled";

export const CreateContainer = styled.div`
  form {
    height: 100%;
    display: flex;
    flex-direction: column;

    .ant-form-item:last-child {
      margin-bottom: 0;
      display: flex;
      justify-content: flex-end;
    }
  }
`;

export const CustomTitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 0.18rem;
  font-weight: normal;
  span {
    position: relative;
    &:after {
      content: "";
      display: block;
      width: 100%;
      height: 0.02rem;
      position: absolute;
      bottom: -0.1rem;
      left: 0;
      background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0),
        rgba(175, 212, 236, 0.7),
        rgba(0, 0, 0, 0)
      );
    }
  }
`;

export const BtnGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0.24rem 0 0.15rem;
  button {
    margin-left: 0.24rem;
  }
`;

export const TemplateContainer = styled.div`
  display: flex;
  margin-top: 0.24rem;
  .template-table {
    flex: 10;
  }
  button {
    flex: 1;
    margin-left: 0.24rem;
    align-self: flex-end;
  }
`;
