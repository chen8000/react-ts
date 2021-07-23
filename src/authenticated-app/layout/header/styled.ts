/*
 * @Author: zhanghui.chen
 * @Date: 2021-07-23 16:37:27
 * @LastEditTime: 2021-07-23 17:51:13
 * @LastEditors: zhanghui.chen
 */
import styled from "@emotion/styled";

// logo
export const LayoutLogoStyled = styled.div`
  /* float: left; */
  margin-right: 1.4rem;
  & > div > img {
    width: 0.38rem;
  }
  & > div > p {
    font-size: 0.18rem;
  }
`;

// select-user
export const LayoutHeaderRightStyled = styled.div`
  width: 2.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

// 用户下拉菜单样式
export const DropdownContentStyled = styled.div`
  display: flex;
  align-items: center;

  .user-dropdown {
    cursor: pointer;
    margin-left: 0.1rem;
    font-size: 0.13rem;
    /* display: flex; */
    /* align-items: center; */
    .iconfont {
      font-size: 0.1rem;
    }
  }
`;
