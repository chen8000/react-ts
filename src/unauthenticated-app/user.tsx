/*
 * @Author: zhanghui.chen
 * @Date: 2021-07-22 19:18:29
 * @LastEditTime: 2021-07-22 19:21:06
 * @LastEditors: zhanghui.chen
 */
import { Form, Input, Button } from "antd";
import { InputStyled, ButtonStyled } from "./styled";
export const UserComponent = () => {
  return (
    <Form layout={"vertical"}>
      <Form.Item
        label={"用户名"}
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

      <Form.Item
        label={"密码"}
        name={"domain"}
        // rules={[
        //   { required: true, message: "Please input your username!" },
        // ]}
      >
        <InputStyled>
          <Input
            placeholder={"请输入密码"}
            size={"large"}
            className={"radius"}
            type={"password"}
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
            登录
          </Button>
        </ButtonStyled>
      </Form.Item>
    </Form>
  );
};
