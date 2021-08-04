/*
 * @Author: zhanghui.chen
 * @Date: 2021-07-23 18:23:14
 * @LastEditTime: 2021-08-04 17:18:43
 * @LastEditors: zhanghui.chen
 */

import {
  TaskContainerStyled,
  TaskTableContainerStyled,
  SearchBarStyled,
  BtnGroupStyled,
  TableContainer,
} from "./styled";
import { HeaderComponent } from "./components/header";
import { Input, Form, Select, Button, Table } from "antd";
import { TableItemsTypes } from "./types";
import { PaginationComponent } from "components/pagination";

export const TaskPage = () => {
  const areas = [
    { label: "Beijing", value: "Beijing" },
    { label: "Shanghai", value: "Shanghai" },
  ];

  const columns = [
    {
      title: "#",
      render: (text: string, record: any, index: number) => index + 1,
    },
    {
      title: "任务名称",
      dataIndex: "task_name",
      // render: (text: string) => <a>{text}</a>,
    },
    {
      title: "创建人",
      dataIndex: "creater",
    },
    {
      title: "上传时间",
      dataIndex: "upload_time",
    },
    {
      title: "号码数量",
      dataIndex: "numbers",
    },
    {
      title: "完成分析率",
      dataIndex: "finish",
    },
    {
      title: "已完成分析",
      dataIndex: "completed",
    },
    {
      title: "未完成分析",
      dataIndex: "undone",
    },
    {
      title: "任务分析状态",
      dataIndex: "task_type",
      render: (text: string) => {
        let color = "#A1ACBB";
        switch (text) {
          case "已完成":
            color = "#7BC5F3";
            break;
          case "分析中":
            color = "#FFE28C";
            break;
        }
        return <span style={{ color }}>{text}</span>;
      },
    },
    {
      title: "备注",
      dataIndex: "remark",
    },
    {
      title: "操作",
      render: (text: string, record: TableItemsTypes) => {
        return (
          <Button danger ghost>
            查看详情
          </Button>
        );
      },
    },
  ];

  const data: TableItemsTypes[] = [
    {
      task_name: "号码分析1",
      creater: "用户名1",
      upload_time: "2021.04.13 16:44:44",
      numbers: "100",
      finish: "23.45%",
      completed: "23",
      undone: "77",
      task_type: "已完成",
      remark: "重要",
    },
    {
      task_name: "号码分析2",
      creater: "用户名2",
      upload_time: "2021.04.13 16:44:44",
      numbers: "10",
      finish: "100%",
      completed: "23",
      undone: "77",
      task_type: "分析中",
      remark: "--",
    },
  ];

  const rowSelection = {
    onChange: (
      selectedRowKeys: React.Key[],
      selectedRows: TableItemsTypes[]
    ) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    // getCheckboxProps: (record: DataType) => ({
    //   // name: record.name,
    // }),
  };

  return (
    <TaskContainerStyled>
      {/* header 负责渲染echarts*/}
      <HeaderComponent />
      {/* 表格 */}
      <TaskTableContainerStyled>
        <SearchBarStyled>
          <Form size={"middle"} layout="inline">
            <Form.Item>
              <Input
                style={{ minWidth: "2.24rem" }}
                placeholder="请输入任务名称进行搜索"
                suffix={<i className={"iconfont iconsousuo1"}></i>}
              />
            </Form.Item>
            <Form.Item label="任务分析状态">
              <Select
                style={{ minWidth: "1rem" }}
                options={areas}
                defaultValue={"全部"}
              >
                <Select.Option value="全部">全部</Select.Option>
              </Select>
            </Form.Item>
          </Form>
          {/*  */}
          <BtnGroupStyled>
            <Button
              className={"icon-btn"}
              icon={<i className={"iconfont iconxinjian"} />}
            >
              新建任务
            </Button>
            <Button
              className={"icon-btn"}
              icon={<i className={"iconfont icondaochu"} />}
            >
              EXCEL导出任务
            </Button>
          </BtnGroupStyled>
        </SearchBarStyled>
        <TableContainer>
          <Table
            rowSelection={{
              ...rowSelection,
            }}
            columns={columns}
            dataSource={data}
            size={"middle"}
            pagination={false}
          />
          <PaginationComponent
            onChange={() => {
              console.log("-----");
            }}
            total={101}
            pageSize={10}
          />
        </TableContainer>
      </TaskTableContainerStyled>
    </TaskContainerStyled>
  );
};
