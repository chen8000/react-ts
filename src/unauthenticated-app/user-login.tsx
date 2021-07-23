/*
 * @Author: zhanghui.chen
 * @Date: 2021-07-22 19:18:29
 * @LastEditTime: 2021-07-23 11:25:06
 * @LastEditors: zhanghui.chen
 */
import { Form, Input, Button } from "antd";
import { InputStyled, ButtonStyled } from "./styled";
export const UserLoginComponent = () => {
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
          <Input placeholder={"请输入用户名"} size={"large"} />
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
          <Input placeholder={"请输入密码"} size={"large"} type={"password"} />
        </InputStyled>
      </Form.Item>

      <Form.Item className={"domain-btn"}>
        <ButtonStyled>
          <Button size={"large"} type={"primary"} htmlType={"submit"} block>
            登录
          </Button>
        </ButtonStyled>
      </Form.Item>
    </Form>
  );
};
