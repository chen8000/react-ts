/*
 * @Author: zhanghui.chen
 * @Date: 2021-07-22 19:03:46
 * @LastEditTime: 2021-07-23 12:01:38
 * @LastEditors: zhanghui.chen
 */
import { Form, Input, Button } from "antd";
import { InputStyled, ButtonStyled } from "./styled";
import { DomainLoginTypes } from "./types";
export const DomainLoginComponent = ({
  onDomainLoginSuccess,
}: DomainLoginTypes) => {
  // 登录域
  const handleDomainLogin = () => {
    // 登录成功后调用
    onDomainLoginSuccess();
  };
  return (
    <Form layout={"vertical"}>
      <Form.Item label={"域"} name={"domain"}>
        <InputStyled>
          <Input placeholder={"请输入用户名"} size={"large"} />
        </InputStyled>
      </Form.Item>

      <Form.Item className={"domain-btn"}>
        <ButtonStyled>
          <Button
            size={"large"}
            type={"primary"}
            htmlType={"submit"}
            block
            onClick={handleDomainLogin}
          >
            登录域
          </Button>
        </ButtonStyled>
      </Form.Item>
    </Form>
  );
};
