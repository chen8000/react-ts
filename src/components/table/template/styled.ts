/*
 * @Author: zhanghui.chen
 * @Date: 2021-08-06 10:51:28
 * @LastEditTime: 2021-08-06 10:52:23
 * @LastEditors: zhanghui.chen
 */
import styled from "@emotion/styled";

export const TemplateContainer = styled.div`
  .ant-table.ant-table-small thead > tr > th,
  .ant-table {
    background: transparent;
  }
  .ant-table tbody > tr > td,
  .ant-table.ant-table-small thead > tr > th {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  .ant-table tbody > tr:last-child > td {
    border-bottom: 0;
  }
  .ant-table.ant-table-bordered .ant-table-container {
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
  .ant-table tbody > tr.ant-table-row:hover > td {
    background: transparent;
  }
  .ant-table-thead > tr > th,
  .ant-table {
    color: rgba(255, 255, 255, 0.3);
  }
`;
