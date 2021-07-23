/*
 * @Author: zhanghui.chen
 * @Date: 2021-07-22 16:05:40
 * @LastEditTime: 2021-07-23 16:33:23
 * @LastEditors: zhanghui.chen
 */
import styled from "@emotion/styled";

// 背景层
export const BgComponentStyled = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
  .bg1 {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .bg2 {
    position: absolute;
    width: 5.68rem;
    bottom: 0;
    left: 2.3rem;
  }
`;

// 登陆框
export const FormComponentStyled = styled.div`
  width: 4.32rem;
  /* height: 5rem; */
  position: absolute;
  right: 3.06rem;
  top: 50%;
  transform: translateY(-50%);

  /* content */
  .content {
    margin-top: 0.4rem;
    background: #092754;
    padding: 0.4rem 0.3rem;
    position: relative;

    h3 {
      color: #fff;
      font-size: 0.24rem;
      font-weight: normal;
      text-align: center;
      margin-bottom: 0.3rem;
    }
  }

  /* common */
  .domain-btn {
    margin-top: 0.48rem;
  }
  .ant-form-item-label > label {
    color: #fff;
    font-size: 0.16rem;
  }
`;

// input
export const InputStyled = styled.div`
  .ant-input:focus {
    border-color: rgba(151, 140, 245, 0.5);
  }
`;

// button
export const ButtonStyled = styled.div`
  .ant-btn {
    border: 0;
  }
  .ant-btn-primary:hover,
  .ant-btn-primary:focus {
    background: linear-gradient(135deg, #79caf3 0%, #978cf5 100%);
    border-color: none;
  }
`;

// 底部信息
export const FooterInfoStyled = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.14rem;
  text-align: center;
`;

// 返回域按钮
export const GoLoginDomainStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 0.3rem;
  height: 0.3rem;
  background: #fff;
  transform: translateX(-150%);
  cursor: pointer;
  color: #8a8e9d;
  display: flex;
  align-items: center;
  justify-content: center;
  .iconfont {
    font-size: 0.15rem;
  }
`;
