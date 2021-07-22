/*
 * @Author: zhanghui.chen
 * @Date: 2021-07-22 19:03:46
 * @LastEditTime: 2021-07-22 19:16:22
 * @LastEditors: zhanghui.chen
 */
import { Form, Input, Button } from "antd";
import { InputStyled, ButtonStyled } from "./styled";
export const DomainComponent = () => {
  return (
    <Form layout={"vertical"}>
      <Form.Item
        label={"域"}
        name={"domain"}
        // rules={[
        //   { required: true, message: "Please input your username!" },
        // ]}
      >
        <InputStyled>
          <Input
            placeholder={"请输入用户名"}
            size={"large"}
            className={"radius"}
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
            className={"radius"}
          >
            登录域
          </Button>
        </ButtonStyled>
      </Form.Item>
    </Form>
  );
};
