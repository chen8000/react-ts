/*
 * @Author: zhanghui.chen
 * @Date: 2021-07-22 16:05:40
 * @LastEditTime: 2021-07-22 19:29:13
 * @LastEditors: zhanghui.chen
 */
import styled from "@emotion/styled";

// 背景层
export const BgComponent = styled.div`
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
export const FormComponent = styled.div`
  width: 4.32rem;
  /* height: 5rem; */
  position: absolute;
  right: 3.06rem;
  top: 50%;
  transform: translateY(-50%);

  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 0.48rem;
    }
    p {
      margin-bottom: 0;
      margin-left: 0.1rem;
      font-size: 0.2rem;
      background-image: -webkit-linear-gradient(
        135deg,
        #978cf5 0%,
        #79caf3 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  /* content */
  .content {
    margin-top: 0.4rem;
    background: #092754;
    padding: 0.4rem 0.3rem;

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
export const FooterInfo = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.14rem;
  text-align: center;
`;
