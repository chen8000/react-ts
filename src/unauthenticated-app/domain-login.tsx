/*
 * @Author: zhanghui.chen
 * @Date: 2021-07-22 19:03:46
 * @LastEditTime: 2021-08-06 15:16:33
 * @LastEditors: zhanghui.chen
 */
import { Form, Button } from "antd";
import { InputStyled, ButtonStyled } from "./styled";
import { DomainLoginTypes } from "./types";
import { LoginInput } from "components";
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
          <LoginInput
            className={"login-input"}
            placeholder={"请输入用户名"}
            size={"large"}
          />
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
