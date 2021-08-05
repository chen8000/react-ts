/*
 * @Author: zhanghui.chen
 * @Date: 2021-08-05 18:10:46
 * @LastEditTime: 2021-08-05 18:20:35
 * @LastEditors: zhanghui.chen
 */
import { ReactNode } from "react";
import styled from "@emotion/styled";
export const RemarkComponent = ({
  children,
  style,
}: {
  children: ReactNode;
  style?: React.CSSProperties | undefined;
}) => {
  return <RemarkContainer style={style}>{children}</RemarkContainer>;
};

const RemarkContainer = styled.p`
  font-size: 0.14rem;
  color: rgba(255, 255, 255, 0.5);
`;
